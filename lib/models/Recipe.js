const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  name: String,
  measurementValue: Number,
  measurementType: String
});

const recipeSchema = new Schema({
  author: String, // User firstName + lastName
  name: String,
  cuisine: String,
  cooktime: Number,
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredients" }],
  Steps: [String],
  image: String
});

const Recipe = mongoose.model("Recipe", recipeSchema);
const Ingredients = mongoose.model("Ingredients", ingredientSchema);

module.exports = Recipe;
module.exports = Ingredients;
