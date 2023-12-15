const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const certificateSchema = new Schema({
  title: [String]
});

module.exports = model("Certificate", certificateSchema);