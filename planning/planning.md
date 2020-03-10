# Recipe Roledex Plan

## Description

Recipe Roledex is an application for users to store and share recipes. Our MVP product is for personal storage (i.e. user logs in and can access their recipes). Within our silver/gold plans we hope to implement user interactivity (i.e. user can share recipes with other users). The site will utilize user provided data.

## Models

We hope to implement (for now) 2 basic data models, one for Users and another for recipes

```Javascript

const Ingredients = {
    name: String,
    measurementValue: Number,
    measurementType: String
}

//e.g

let ingredients = {
    name: "Chocolate Chips",
    measurementValue: 1,
    measurementType: "cup"
}

const Recipe = {
    author: String, // User firstName + lastName
    name: String,
    cuisine: String,
    cooktime: Number,
    ingredients: [],
    Steps: [String],
    image: String
}

//e.g

let chocoMuffins = {
    author: person,
    name: "Chocolate Chip Muffins",
    cuisine: "American",
    cooktime: 120,
    ingredients: [ingredes]
    steps: ['preheat oven to 450 degrees F', 'bake muffins for 20 min']
    image: "https://images.media-allrecipes.com/userphotos/720x405/4470819.jpg"
}

const User = new Schema ({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    email: String,
    picture: String,
    recipes: []
})

<<<<<<< HEAD
const Ingredients = {
    ingredient: String,
    amount: Number,
    measurementType: String
}

const Recipe = {
    author: String, // User firstName + lastName
    name: String,
    cuisine: String,
    cooktime: Number,
    ingredients: [Ingredients],
    Steps: [String],
    image: String
=======
let person = {
    firstName: "Jane",
    lastName: "Apple",
    username: 'japple22',
    password: 'password123',
    email: 'japple1@gmail.com',
    picture: 'http://www.shutterstock.com/picture.jpg',
    recipes: [chocoMuffins]
>>>>>>> b9d3d147c3c088e08351bf0016dc741e4d14d98c
}



```

## Git Workflow

For this project, we will be utilizing the Feature Branch workflow to manage commits and merges.
