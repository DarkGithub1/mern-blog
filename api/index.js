import express from "express";
import mongoose from "mongoose";
import userRoutes from './routes/user.route.js'
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

// server connection

const app = express();
app.listen(3000, () => {
  console.log("server is running on port 3000!");
});

// server connection

// api route

app.use('/api/user',userRoutes)

// api route
