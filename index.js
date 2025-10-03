import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost/flynow")
  .then(() => console.log("Successfully Connected to The Database"))
  .catch((err) =>
    console.error(
      "Database Connection Error. Could Not connect to The MongoDB Database",
      err
    )
  );

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App Listening on Port ${port}`));
