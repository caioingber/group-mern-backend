# Recipe Rolodex Backend

## Introduction

The Recipe Roledex API is a cloud based database that holds the data generated and displayed in the corresponding [Recipe Rolodex](https://hopeful-wescoff-cde9f9.netlify.com/) frontend application.

This API was built with an MVC approach in Express.js and deployed via Heroku. RESTful routes include pathways for full CRUD capabilities with the Recipe model, and Create and Read for Users.

## Models

The Recipe model includes various descriptor fields, which consist of different strings. The steps/instruction key-value pair consists of an array of strings. After the initial build and implementation of our front-end application, we added a 'likes' property which has update capabilities built out through the user interface (i.e. when a user clicks the Like button, increments the displayed value).

```Javascript
const recipeSchema = new Schema({
  author: String, // User firstName + lastName
  name: String,
  cuisine: String,
  course: String,
  cooktime: String,
  ingredients: [ingredientSchema],
  steps: [String],
  image: String,
  likes: 0
});
```

The Ingredients model functions as a subdocument in our Recipes collection and consists of a name, measurement value, and measurement type.

```Javascript
const ingredientSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  name: String,
  measurementValue: String,
  measurementType: String
});
```

The final User model consists of name and email properties. We incorporated user authentication utilizing JWT web tokens with Passport.js in our MVC framework.

```Javascript
const UserSchema = new mongoose.Schema({
  email: String,
  password: String
});
```

## RESTful Paths

| Method |       Path        | Description                                           |
| ------ | :---------------: | ----------------------------------------------------- |
| GET    |         /         | Retrieves all recipes                                 |
| GET    | /cuisine/:cuisine | Retrieves all recipes with matching cuisine parameter |
| GET    |  /course/:course  | Retrieves all recipes with matching course paramater  |
| GET    |   /author/:name   | Retrieves all recipes with matching author paramater  |
| POST   |         /         | Adds a new recipes to the collection                  |
| PUT    |       /:id        | Updates a recipe using its ObjectID as a parameter    |
| DELETE |       /:id        | Deletes a recipe using its ObjectID as a parameter    |
| GET    |      /users       | Retrieves all users                                   |
| POST   |   /users/login    | Creates an authentication token for an existing user  |
| POST   |   /users/signup   | Creates a user and issues an authentication token     |

## Technologies Used

- MongoDB
- Mongoose ODM
- Express.js
- Node.js
- Passport.js
- Mongo Atlas
- Heroku

## Contributing

Feel free to fork and clone this repository. Run `npm install` to install dependencies included in package.json file. Please submit a pull request with any recommendations or feedback.

## Challenges

The most challenging part of this project was incorporating user

## Goals & Unsolved Problems

In future iterations of this project, we hope to reference user recipe data inside the user model and vice versa, so that users can interact with their specific recipes and so that we can enable only Update/Delete functionality if a user created that specific recipe. Currently, we do not have specific parameters set on our key-value pairs in our models aside from data type, meaning a user can create a blank document. We plan on including additional email verification methods (i.e. inlucing an '@' symbol) and password confirmation.

We also hope to incorporate the capability to update ingredients inside recipes as well.

## Built By

- Colleen O'Brien
- Rachel Israel
- Levani Papashvili
- Caio Ingber
