import mongoose, { Types } from "mongoose";

const priceSchema = new mongoose.Schema({
  from: String,
  to: String,
  price: { type: Number, default: 0 },
  isBooked: { type: Boolean, default: false },
});
/**
 * bangladesh->india->japan->france-german>
 */

const seatShema = new mongoose.Schema({
  seatNumber: Number,
  allRoads: [String],
  seatClass: { type: String, default: "ecomony" },
  price: [priceSchema],
  bookedRaod: [String],
  isBooked: { type: Boolean, default: false },
  passengerId: String,
});

const aroPlaneSchema = new mongoose.Schema({
  flightName: String,
  flightRoadGo: [String],
  flightRoadBack: [String],
  priceList: [
    new mongoose.Schema({
      from: String,
      to: String,
      price: { type: Number, default: 0 },
    }),
  ],
  flightDate: String,
  flightTime: String,
  flightSeat: [seatShema],
});

export { aroPlaneSchema };
