const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const upload = require("../utils/multer");

const {
  addDriver,
  getDrivers,
  updateDriver,
  deleteDriver
} = require("../controllers/driverController");


router.post("/add", protect, upload.single("photo"), addDriver);

router.get("/list", protect, getDrivers);

router.put("/update/:id", protect, updateDriver);

router.delete("/delete/:id", protect, deleteDriver);

module.exports = router;