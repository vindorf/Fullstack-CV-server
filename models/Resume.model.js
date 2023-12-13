const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const resumeSchema = new Schema({
  resumeTitle: String,
  title: String,
  firstName: { type: String },
  lastName: { type: String },
  phone: { type: String },
  street: String,
  city: String,
  email: { type: String },
  linkedin: { type: String },
  website: { type: String },
  skills: String,
  studyyear: String,
  educationTitle: String,
  institute: String,
  educationDescription: String,
  language: String,
  intro: String,

  workingyear: String,
  company: String,
  role: String,
  jobDescription: String,

  img: String,
  certificate: [String],
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Resume", resumeSchema);
