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

// Get Destination
router.get("/api/destination", async (req, res) => {
  const destination = await Destination.find();
  res.send(destination);
});

export { router as destination };
