const mongoose = require("mongoose");

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else mongoURI = "mongodb://localhost/recipes";

mongoose.connect(mongoURI, {
  useNewUrlParser: true
});

module.exports = mongoose;

//heroku config:set DB_URL="mongodb+srv://admin123:admin123@recipe0-diwdp.mongodb.net/test?retryWrites=true&w=majority"
