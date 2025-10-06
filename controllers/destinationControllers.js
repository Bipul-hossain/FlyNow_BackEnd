import express from "express";
import mongoose from "mongoose";
import { destinationSchema } from "../Schema/destinationSchema.js";
const router = express.Router();

const Destination = mongoose.model("destination", destinationSchema);
// Post destination
router.post("/api/destination", async (req, res) => {
  const destination = new Destination({
    allDestination: req.body.allDestination,
  });
  const result = await destination.save();
  res.send(result);
});
const postDestinatinFun = async (location) => {
  const destination = new Destination({
    allDestination: location,
  });
  const result = await destination.save();
};

// Get Destination
router.get("/api/destination", async (req, res) => {
  const destination = await Destination.find();
  res.send(destination);
});
// Get Destinatin Function
const getDestinationFun = async () => {
  const destination = await Destination.find();
  return destination;
};
// update Destination
const updateDestinationFun = async (id, data) => {
  const destination = await Destination.findById(id);
  destination.allDestination = data;
  await destination.save();
};

export {
  router as destination,
  getDestinationFun,
  postDestinatinFun,
  updateDestinationFun,
};
