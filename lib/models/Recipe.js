const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  name: String,
  measurementValue: String,
  measurementType: String
});

const recipeSchema = new Schema({
  author: String, // User firstName + lastName
  name: String,
  cuisine: String,
  course: String,
  cooktime: Sting,
  ingredients: [ingredientSchema],
  Steps: [String],
  image: String
});

const Recipe = mongoose.model("Recipe", recipeSchema);
const Ingredients = mongoose.model("Ingredients", ingredientSchema);

module.exports = Recipe;
// module.exports = Ingredients;
// type: Schema.Types.ObjectId, ref: "Ingredients"
