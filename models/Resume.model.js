const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const resumeSchema = new Schema({
  title: String,
  intro: String,
  firstName: { type: String },
  lastName: { type: String },
  address: {
    street: String,
    houseNr: String,
    postalCode: String,
    city: String,
    country: String,
  },
  phone: { type: String },
  education: [
    {
      instituteName: String,
      degreeName: String,
      startYear: Number,
      endYear: Number,
      description: String,
    },
  ],
  languages: { languageName: String, languageLevel: String },
  workExperience: [
    {
      companyName: String,
      jobTitle: String,
      startYear: Number,
      endYear: Number,
      description: String,
    },
  ],
  img: String,
  skills: [String], // changed it to array of string because we are not using the skill model yet.
  certificates: [String], // changed it to array of string because we are not using the certificates model yet.
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Resume", resumeSchema);
