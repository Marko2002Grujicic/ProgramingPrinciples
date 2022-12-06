/* Task 1: Create an object that represents your favourite coffee. Please include coffee name ,strength, flavour, milk, sugar, … everything you like! */

var coffee = {
name: "cappuccino",
strenght: "mild",
flavour: "chocolate",
milk: "yes",
sugar: "no"
}
console.log(coffee);

/* Task 2: Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. */
var favouriteMovie = {
title: "Inception",
actors: {
    actor1: "Leonardo DiCaprio",
    actor2: "Joseph Gordon-Levitt",
    actor3: "Elliot Page",
    actor4: "Ken Watanabe",
    actor5: "Michael Caine"
},
director: "Christopher Nolan",
genre: {
    genre1: "Action",
    genre2: "Adventure",
    genre3: "Sci-Fi"
},
popularity: "Popular"
}

/* Task 3: Write a function that creates an object that represents a project. Each project is described by: description, programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository, a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not*/

function getProgram(desc, lang, git, devStatus) {
    var program = {
        description: desc,
        language: lang,
        gitRep: git,
        status: devStatus,
        printGit: function () {
            console.log(program.gitRep);
        },
        isJavaScript: function () {
            if (program.language === "JavaScript") {
                return true;
            }
            return false;
        },
        isCompleted: function(){
            return program.status;
       } 
    }
    return program;
}


/* Task 4: Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared in under 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients. */

function createRecipe (name, type, complex, ingredients, time, instruction){
    var recipe = {
        recipeName: name,
        typeOfCuisine: type,
        complexity: complex,
        listOfIngredients: ingredients,
        preparingTime: time,
        preparingInstruction: instruction,
        printShopList: function (){
            console.log(recipe.listOfIngredients);
        },
        checkTime: function (){
            if(recipe.preparingTime < 15){
                return "This meal can be made in under 15 minutes"
            }
        },
        changeCuisine : function (newType){
            recipe.typeOfCuisine = newType;
        },
        deleteIngredient : function (){
            recipe.filter((ing) => {
                return recipe.listOfIngredients !== ing;
            })
        }
        
    }   
    return recipe;
}










