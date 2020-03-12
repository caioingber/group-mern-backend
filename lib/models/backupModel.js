const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  author: String, // User firstName + lastName
  name: String,
  cuisine: String,
  course: String,
  cooktime: String,
  ingredients: [
    { name: String, measurementValue: String, measurementType: String }
  ],
  steps: [String],
  image: String
});

const Recipe = mongoose.model("Recipe", recipeSchema);
// const Ingredients = mongoose.model("Ingredients", ingredientSchema);

module.exports = Recipe;
// module.exports = Ingredients;
// type: Schema.Types.ObjectId, ref: "Ingredients"
