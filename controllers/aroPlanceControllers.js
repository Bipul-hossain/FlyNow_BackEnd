import mongoose from "mongoose";
import express from "express";
import { aroPlaneSchema } from "../Schema/aroplane.js";

const router = express.Router();
// Aro_Plnane Model Create

const AroPlane = mongoose.model("aro_plane_shidules", aroPlaneSchema);

// 1. Post AroPlane Details..
router.post("/api/aroplane", async (req, res) => {
  const newAroplane = new AroPlane({
    flightName: req.body.flightName,
    flightRoadGo: req.body.flightRoadGo,
    flightRoadBack: req.body.flightRoadBack,
    flightDate: req.body.flightDate,
    flightTime: req.body.flightTime,
    flightSeat: req.body.flightSeat,
  });
  const result = await newAroplane.save();
  res.send(result);
});

// 2. Get Aroplane Details.......
router.get("/api/aroplane", async (req, res) => {
  const aroplaneDetails = await AroPlane.find();
  res.send(aroplaneDetails);
});
// Get From to To and Data From Quary
router.get("/api/aroplane/select", async (req, res) => {
  console.log(req.query);
  const aroplaneDetails = await AroPlane.find({
    flightDate: req.query.flightDate,
    "flightSeat.price.from": req.query.from,
    "flightSeat.price.to": req.query.to,
  });
  res.send(aroplaneDetails);
});

export { router as aroPlanceController };
