import express from "express";
import mongoose from "mongoose";
import { UserSchema } from "../Schema/userSchema.js";
import { bcryptPassword, comparePassword } from "../bycript/bycript.js";
import jwt from "jsonwebtoken";

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
router.post("/api/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(404).send("Email or password is incorrect");
    return;
  }
  const password = await comparePassword(req.body.password, user.password);
  if (!password) {
    res.status(404).send("Email or password is incorrect");
    return;
  }
  const token = jwt.sign(
    {
      userName: user.userName,
      email: user.email,
      role: user.role,
    },
    "bipul"
  );

  res
    .header("x-auth-token", token)
    .send({ userName: user.userName, email: user.email, role: user.role });
});

export { router as userController };
