const multer = require("multer");
const User = require("../models/User");

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage }).single("lockerFile");

exports.uploadFile = (req, res) => {
  upload(req, res, async (err) => {
    if (err) return res.status(500).json({ error: "File upload failed" });

    try {
      const user = await User.findById(req.user.userId);
      user.lockerFiles.push(req.file.path);
      await user.save();
      res.json({ message: "File uploaded successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error saving file to locker" });
    }
  });
};
