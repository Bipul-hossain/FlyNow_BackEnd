import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { aroPlanceController } from "./controllers/aroPlanceControllers.js";
import { destination } from "./controllers/destinationControllers.js";
import { userController } from "./controllers/userController.js";

const app = express();
app.use(express.json());
app.use(cors({ exposedHeaders: ["x-auth-token"] }));

mongoose
  .connect("mongodb://localhost/flynow")
  .then(() => console.log("Successfully Connected to The Database"))
  .catch((err) =>
    console.error(
      "Database Connection Error. Could Not connect to The MongoDB Database",
      err
    )
  );

app.use("/", aroPlanceController);
app.use("/", destination);
app.use("/", userController);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App Listening on Port ${port}`));
