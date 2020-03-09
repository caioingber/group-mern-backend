# Recipe Roledex Plan

## Description

Recipe Roledex is an application for users to store and share recipes. Our MVP product is for personal storage (i.e. user logs in and can access their recipes). Within our silver/gold plans we hope to implement user interactivity (i.e. user can share recipes with other users). The site will utilize user provided data.

## Models

We hope to implement (for now) 2 basic data models, one for Users and another for recipes

```Javascript
const User = new Schema ({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    email: String,
    picture: String,
    recipes: []
})

const Recipe = {
    author: String, // User firstName + lastName
    name: String,
    cuisine: String,
    cooktime: Number,
    ingredients: [String],
    Steps: [String],
    image: String
}
```

## Git Workflow

For this project, we will be utilizing the Feature Branch workflow to manage commits and merges.
