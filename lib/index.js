const express = require("express");
const app = express();
const Test = require("./db/model-test");
const parser = require("body-parser");
const cors = require("cors");

app.set("port", process.env.PORT || 8080);

app.get("/", (req, res) => {
  Test.find({}).then(test => {
    res.json(test);
  });
});

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

// app.listen(3000, () => console.log("runnign on 3000"));
