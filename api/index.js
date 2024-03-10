import express from "express";
import mongoose from "mongoose";
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

// .dot env file configuration
import dotenv from "dotenv";
dotenv.config();
// .dot env file configuration

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
app.use(express.json());
app.listen(3000, () => {
  console.log("server is running on port 3000!");
});
// server connection

// api route
app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes)
// api route

// middleware for handling response
app.use((err,req,res,next)=>{
  const statusCode=err.statusCode || 500;
  const message=err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success:false,
    statusCode,
    message
  });

})
//  middleware for handling response