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
    priceList: req.body.priceList,
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
  console.log("Upoorer ta", req.query);
  const aroplaneDetails = await AroPlane.find({
    flightDate: req.query.flightDate,
  });
  const newAroplaneArray = [];
  for (const aroplane of aroplaneDetails) {
    if (aroplane.flightRoadGo.includes(req.query.from)) {
      const fromIndex = aroplane.flightRoadGo.indexOf(req.query.from);
      const toIndex = aroplane.flightRoadGo.indexOf(req.query.to);
      if (fromIndex < toIndex) {
        newAroplaneArray.push(aroplane);
      }
    }
  }
  res.send(newAroplaneArray);
  // ,
  //   "flightSeat.price.from": req.query.from,
  //   "flightSeat.price.to": req.query.to,
});
// // GEt Aroplane Detials by id
// router.get("/api/aroplane/select/:id", async (req, res) => {
//   const flight = await AroPlane.findById(req.params.id);
//   res.send(flight);
// });

// Get it to Booked.......

router.get("/api/aroplane/bokked/status/:id", async (req, res) => {
  const form = req.query.from;
  const to = req.query.to;
  console.log("all is ok");
  const flight = await AroPlane.findById(req.params.id);

  for (const seat of flight.flightSeat) {
    if (seat.allRoads.includes(form) && seat.allRoads.includes(to)) {
      const arraySlice = seat.allRoads.slice(
        seat.allRoads.indexOf(form),
        seat.allRoads.indexOf(to) + 1
      );

      if (arraySlice.includes("booked")) {
        seat.isBooked = true;
      } else {
        seat.isBooked = false;
      }
      // console.log("New Array ", arraySlice);
    } else {
      seat.isBooked = true;
    }
  }

  // const result = await flight.save();
  res.send(flight);
});

// router.get("/api/aroplane/select/:id", async (req, res) => {
//   const form = "bangladesh";
//   const to = "france";
//   const seatNo = 1;
//   const flight = await AroPlane.findById(req.params.id);
//   const seatWise = flight.flightSeat.find((seat) => seat.seatNumber === seatNo);
//   const indexFrom = seatWise.allRoads.indexOf(form);
//   const indexTo = seatWise.allRoads.indexOf(to);

//   for (let index = indexFrom; index < indexTo; index++) {
//     seatWise.allRoads[index] = "booked";
//   }

//   for (const seat of flight.flightSeat) {
//     if (seat.allRoads.includes(form) && seat.allRoads.includes(to)) {
//       const arraySlice = seat.allRoads.slice(
//         seat.allRoads.indexOf(form),
//         seat.allRoads.indexOf(to) + 1
//       );
//       console.log("majhe ki ase Yes");
//       if (arraySlice.includes("booked")) {
//         seat.isBooked = true;
//         console.log("truee hoise");
//       } else {
//         seat.isBooked = false;
//       }

//     } else {
//       seat.isBooked = true;
//     }
//   }

//   res.send(flight);
// });

export { router as aroPlanceController };
