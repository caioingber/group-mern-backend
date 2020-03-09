const express = require("express");
const app = express();
const parser = require("body-parser");
const router = require("./routing/routes");
const cors = require("cors");

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
