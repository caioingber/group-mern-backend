const Recipe = require("../models/Recipe");

module.exports = {
  index: (req, res) => {
    Recipe.find({}).then(recipe => {
      res.json(recipe);
    });
  },
  showCuisine: (req, res) => {
    Recipe.find({ cuisine: req.params.cuisine }).then(recipe => {
      res.json(recipe);
    });
  },
  showCourse: (req, res) => {
    Recipe.find({ course: req.params.course }).then(recipe => {
      res.json(recipe);
    });
  },
  showAuthor: (req, res) => {
    Recipe.find({ author: req.params.author }).then(recipe => {
      res.json(recipe);
    });
  }
};
