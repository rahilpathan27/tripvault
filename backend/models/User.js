const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  lockerPIN: String,
  lockerFiles: [String], // Store file paths for uploaded files
  trips: [{ type: mongoose.Schema.Types.ObjectId, ref: "Trip" }],
});

module.exports = mongoose.model("User", userSchema);
