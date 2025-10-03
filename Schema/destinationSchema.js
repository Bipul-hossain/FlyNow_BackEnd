import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  allDestination: [String],
});

export { destinationSchema };
