const mongoose = require("mongoose");

const deleteSchema = new mongoose.Schema({
  deletedDriversCount: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("DeleteCount", deleteSchema);