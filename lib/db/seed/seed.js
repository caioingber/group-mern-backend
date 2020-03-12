const Ingredients = require("../../models/Recipe");
// const Recipe = require("../../models/Recipe");
const Recipe = require("../../models/backupModel");
const data = require("../data/recipe.json");

Recipe.remove({}).then(() => {
  Recipe.create(data)
    .then(recipe => {
      console.log(recipe);
    })
    .catch(err => {
      console.log(err);
    });
});
