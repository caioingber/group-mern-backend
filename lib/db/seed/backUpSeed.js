// const Ingredients = require("../../models/Recipe");
const Recipe = require("../../models/backupModel");
const data = require("../data/recipe.json");

Recipe.remove({}).then(() => {
  Recipe.create(data)
    .then(data => console.log(data))
    .catch(err => console.log(err));
});
