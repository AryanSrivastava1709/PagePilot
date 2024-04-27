import mongoose from "mongoose";
import { app } from "./index.js";
import dotenv from "dotenv";

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("Shutting down....");
  process.exit(1);
});

dotenv.config();

//Database Setup
const DB = process.env.MONGO_URI;

mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log(err.message);
  });

// Server Setup
const port = process.env.PORT || 6000;
const server = app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION! Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});
