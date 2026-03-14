const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  driverId: {
    type: String,
    required: true
  },
  driverName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  photo: {
    type: String
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model("Driver", driverSchema);