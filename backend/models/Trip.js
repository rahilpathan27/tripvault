const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  imageUrl: String, // URL of the trip image
  expenses: [
    {
      date: { type: String },
      amount: { type: Number },
    },
  ],
});

module.exports = mongoose.model("Trip", tripSchema);
