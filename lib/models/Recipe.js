const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Ingredients = new Schema({
  name: String,
  measurementValue: Number,
  measurementType: String
});

const Recipe = new Schema({
  author: String, // User firstName + lastName
  name: String,
  cuisine: String,
  cooktime: Number,
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredients" }],
  Steps: [String],
  image: String
});

module.exports
module.exports = mongoose.model("Recipe", Recipe);
