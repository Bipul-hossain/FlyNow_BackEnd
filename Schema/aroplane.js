import mongoose, { Types } from "mongoose";

const aroPlaneSchema = new mongoose.Schema({
  flightName: String,
  flightRoadGo: [String],
  flightRoadBack: [String],
  flightDate: Date,
  flightSit: [],
});
