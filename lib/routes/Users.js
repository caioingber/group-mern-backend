const express = require("express");
const controller = require("../controllers/users");
const router = express.Router();
const parser = require("body-parser");
router.use(parser.json());

router.get("/", controller.getUsers);
router.post("/login", controller.login);
router.post("/signup", controller.signup);

module.exports = router;
