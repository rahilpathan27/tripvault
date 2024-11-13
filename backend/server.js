require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const lockerRoutes = require("./routes/lockerRoutes");

const app = express();

// Middleware for handling CORS
app.use(cors({
  origin: 'http://localhost:3000', // Allow only requests from frontend (React) running on localhost:3000
  methods: 'GET,POST',            // Allow specific methods
  allowedHeaders: 'Content-Type,Authorization' // Allow specific headers
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Setup Routes
app.use("/auth", authRoutes);  // Authentication routes (e.g., SignUp, Login)
app.use("/locker", lockerRoutes);  // Locker-related routes (for example, user-specific lockers)

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
