const Trip = require("../models/Trip");

exports.createTrip = async (req, res) => {
  const { name, imageUrl } = req.body;
  try {
    const trip = new Trip({
      userId: req.user.userId,
      name,
      imageUrl,
    });
    await trip.save();
    res.status(201).json({ message: "Trip created successfully", trip });
  } catch (error) {
    res.status(500).json({ error: "Error creating trip" });
  }
};
