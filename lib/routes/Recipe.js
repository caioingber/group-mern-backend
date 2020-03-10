const express = require("express");
// const controller = require("./controller");
const router = express.Router();

router.get("/", recipe.index);
router.get("/new", controller.newRecipe);
router.get("/cuisine/:cuisine", recipe.showCuisine);
router.get("/course/:course", recipe.showCourse);
router.get("/author/:name", recipe.showAuthor);
router.post("/", recipe.create);
router.put("/:id", recipe.edit);
router.delete("/:id", recipe.delete);

module.exports = router;
