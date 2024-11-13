// backend/testMongoConnection.js
require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("MongoDB URI (from .env):", process.env.MONGO_URI); // Debug line to check URI

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully in test script");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

connectDB();
