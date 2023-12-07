

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const skillSchema = new Schema({
  title: [String]
});

module.exports = model("Skill", skillSchema);
