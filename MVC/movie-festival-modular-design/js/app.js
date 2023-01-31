"use strict";

var appModule = (function (data, ui) {

    var createMovieButton = document.querySelector("#createMovie");
    var createProgramButton = document.querySelector("#createProgram");
    var addMovieToProgramButton = document.querySelector("#addMovie");


    function addMovie() {
        // Collect Data
        var formData = ui.collectMovieData();
        console.log(formData);
        // Validate data
        var isValid = data.validateMovieData(
            formData.title,
            formData.length,
            formData.genre
            );
        if (!isValid) {
            return ui.setMovieError("Invalid input");}
        else{
    // create Movie object
    var createdMovieObject = data.createMovie(formData.title, formData.length, formData.genre);
    var index = data.addMovieToFestival(createdMovieObject);
    // add movie to Dom movie list
    ui.addMovieToDom(createdMovieObject, index);
    ui.clearInputs();
    }};

// Program
    function addProgram(){
    // Collect data from user
    var formData = ui.collectProgramData();
    // Validate input
    var isValid = data.validateProgramData(
        formData.date
    )
    // Checks if the Date is entered
    if (!isValid){
        ui.setProgramError("Please select a date.") ;
        return;
    }
    // Check if the Date entered is old/expired
    var date = new Date(formData.date)
    if (date.getTime() < Date.now){
        ui.setProgramError("Invalid date!") ;
        return;
    };
    // create Program object
    var createdProgramObject = data.createProgram(date);
    var index = data.addProgramToFestival(createdProgramObject)
    // add program to Dom program list
    ui.addProgramToDom(createdProgramObject, index)
    
    ui.clearInputs();
    };

    function addMovieToProgram(){
        // Collect data
        var formData= ui.collectMovieToProgramData();
        // Validate data
        var isValid = data.validateMovieToProgramData(
            formData.movie,
            formData.program)
        if (!isValid) return ui.setMovieError("Please select an option from the list.");
        // Checks if movie is already added to the program
        var isAdded = data.isAddedTo(formData.movie)
        if (isAdded == true) {
           return ui.setMovieToProgramError("Movie is already in this program")
        }
        // Clear input
        data.addTo(formData.movie, formData.program);
        ui.clearInputs();
    };
    
    createMovieButton.addEventListener("click", addMovie);
    createProgramButton.addEventListener("click", addProgram);
    addMovieToProgramButton.addEventListener("click", addMovieToProgram);
    })(dataModule, uiModule);
