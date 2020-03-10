const Recipe = require("../models/Recipe");

module.exports = {
  index: (req, res) => {
    Recipe.find({}).then(recipe => {
      res.json(recipe);
    });
    showCuisine: (req, res) => {
      Recipe.find({ cuisine: req.params.cuisine }).then(recipe => {
        res.json(recipe);
      });
      showCourse
    };
  }
};
