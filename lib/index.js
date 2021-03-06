const express = require("express");
const app = express();
// const Recipe = require("./models/Recipe");
// const Recipe = require("./models/backupModel");
const router = require("./routes/Recipe");
// const Test = require("./db/model-test");
const parser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/Users");
const passport = require("./config/passport")();

app.use(cors());

app.set("port", process.env.PORT || 8080);
app.use("/", router);
app.use(parser.json());
app.use("/users", userRouter);
app.use(passport.initialize());

// app.get("/", (req, res) => {
//   Recipe.find({}).then(recipes => {
//     res.json(recipes);
//   });
// });

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

// app.listen(3000, () => console.log("runnign on 3000"));
