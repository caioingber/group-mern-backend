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
  course: String,
  cooktime: Number,
  ingredients: [ingredientSchema],
  Steps: [String],
  image: String
});

module.exports = mongoose.model("Recipe", recipeSchema);
const Ingredients = mongoose.model("Ingredients", ingredientSchema);

// module.exports = Recipe;
// module.exports = Ingredients;
// type: Schema.Types.ObjectId, ref: "Ingredients"
