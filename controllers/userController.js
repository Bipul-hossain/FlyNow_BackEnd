import express from "express";
import mongoose from "mongoose";
import { UserSchema } from "../Schema/userSchema.js";
import { bcryptPassword } from "../bycript/bycript.js";

const router = express.Router();

const User = mongoose.model("users", UserSchema);

router.post("/api/users", async (req, res) => {
  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: await bcryptPassword(req.body.password),
  });
  const result = await user.save();
  res.send(result);
});

export { router as userController };
