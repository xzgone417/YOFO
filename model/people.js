var mongoose = require("mongoose");
var peopleSchema = new mongoose.Schema({
  heading: { type: String },
  collapse: { type: String },
  control: { type: String },
  ido: { type: String },
  label: { type: String },
  title1: { type: String },
  icon1: { type: String },
  icon2: { type: String },
  icon3: { type: String },
  title2: { type: String },
  description1: { type: String },
  description2: { type: String },
  description3: { type: String },
  description4: { type: String },
  title3: { type: String },
  description5: { type: String },
  description6: { type: String },
  description7: { type: String },
  description8: { type: String },
  description9: { type: String },
  title4: { type: String },
  email: { type: String },
});
var People = new mongoose.model("person", peopleSchema, "person");
module.exports = People;
