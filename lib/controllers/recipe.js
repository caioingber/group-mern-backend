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
  },
  showIngredient: (req, res) => {
    Recipe.find({ ingredients: req.params.ingredient }).then(recipe => {
      res.json(recipe);
    });
  },
  create: (req, res) => {
    Recipe.create(req.body).then(recipe => {
      res.json(recipe);
    });
  },
  edit: (req, res) => {
    Recipe.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true
    }).then(recipe => {
      res.json(recipe);
    });
  },
  delete: (req, res) => {
    Recipe.findOneAndRemove({ name: req.params.name }).then(recipe => {
      res.json(recipe);
    });
  }
};
