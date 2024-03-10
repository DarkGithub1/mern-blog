import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// DB connection

mongoose
  .connect(process.env.MONGOURI)
  .then(() => {
    console.log("MongoDb is Connected...");
  })
  .catch((err) => {
    console.log(err);
  });
  
// DB connection

const app = express();
app.listen(3000, () => {
  console.log("server is running on port 3000!");
});
