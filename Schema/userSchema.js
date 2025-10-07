import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  role: { type: String, default: "visitor" },
});

export { UserSchema };
