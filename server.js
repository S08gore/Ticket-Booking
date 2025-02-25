import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; // Named import for connectDB

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.get("/", (req, res) => {
  res.send("Ticket Booking System");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
