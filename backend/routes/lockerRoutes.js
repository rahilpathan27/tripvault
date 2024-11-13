const express = require("express");
const { uploadFile } = require("../controllers/lockerController");
const router = express.Router();
// Corrected import path in backend/routes/lockerRoutes.js
const authMiddleware = require("../middleware/authMiddleware");


router.post("/upload", authMiddleware, uploadFile);

module.exports = router;
