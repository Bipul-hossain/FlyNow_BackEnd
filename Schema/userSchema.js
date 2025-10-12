import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  role: { type: String, default: "visitor" },
  bookedFlight: [
    new mongoose.Schema({
      flightName: String,
      flightDate: String,
      flightTime: String,
      from: String,
      to: String,
      price: { type: Number, default: 0 },
      flightSeat: [Object],
    }),
  ],
});

export { UserSchema };
