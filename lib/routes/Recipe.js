const express = require("express");
const controller = require("../controllers/recipe");
const router = express.Router();
const parser = require("body-parser");
router.use(parser.json())

router.get("/", controller.index);
// router.get("/new", controller.newRecipe);
router.get("/cuisine/:cuisine", controller.showCuisine);
router.get("/course/:course", controller.showCourse);
router.get("/author/:name", controller.showAuthor);
router.post("/", controller.create);
router.put("/:id", controller.edit);
router.delete("/:id", controller.delete);

module.exports = router;
