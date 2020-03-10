const Ingredients = require("../../models/Recipe");
const Recipe = require("../../models/Recipe");
const data = require("../data/recipe.json");

Recipe.remove({});
Recipe.create(data)
  .then(recipe => {
    console.log(recipe);
  })
  .catch(err => {
    console.log(err);
  });
