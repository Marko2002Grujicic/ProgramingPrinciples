"use strict"

var uiModule = (function (){

    var inputTitleElement = document.querySelector("#title");
    var inputLengthElement = document.querySelector("#length");
    var selectGenreElement = document.querySelector("#genre");
    var movieErrorElement = document.querySelector("#movieError");
    var ulMovieListElement = document.querySelector("#movieList");
    var inputDateElement = document.querySelector("#date");
    var programErrorElement = document.querySelector("#programError");
    var ulProgramListElement = document.querySelector("#programList");
    var selectMovieElement = document.querySelector("#selectMovie");
    var selectProgramElement = document.querySelector("#selectProgram");
    var addMovieErrorElement = document.querySelector("#addMovieError");
    
    // Collect movie data
    function collectMovieData(){
        var title = inputTitleElement.value
        var length = inputLengthElement.value
        var genreValue = selectGenreElement.value;
        return {
            title: title,
            length: length,
            genre: genreValue
        }
    }
    // Validate movie data
    function setMovieError(string){
        movieErrorElement.textContent = string;
        return;
    }
    
    //add movie to DOM movie list
    function addMovieToDom(movie, index){
        var movieDataLi = document.createElement("li");
        movieDataLi.textContent = movie.getData();
        ulMovieListElement.appendChild(movieDataLi);

    //create new movie DOM select option
        var movieOption = document.createElement("option");
        movieOption.textContent = movie.title;
        movieOption.setAttribute("value", index);
        selectMovieElement.appendChild(movieOption);        
        return;
    }

    function collectProgramData(){
      //collect data from user
      var dateInputValue = inputDateElement.value;
      return {
        date : dateInputValue
    }}
    // Validate input
    function setProgramError(string){
        programErrorElement.textContent = string;
        return;
    }
    function clearInputs(){
        programErrorElement.textContent = "";
        inputTitleElement.value = "";
        inputLengthElement.value = "";
        selectGenreElement.value = "";
        selectMovieElement.value = "";
        selectProgramElement.value = ""; 
        addMovieErrorElement.textContent = ""

    }   
        // Create program instance and add it to festival instance
    
    // Add program to DOM program list
    function addProgramToDom(program, index){
        var li = document.createElement("li");
        li.setAttribute("id", "program-item-" + index);
        li.textContent = program.getData();
        ulProgramListElement.appendChild(li);
    // Option
        var option = document.createElement("option");
        option.setAttribute("value", index);
        option.textContent = program.getData();
        selectProgramElement.appendChild(option);
    };
    
    // collect data
    function collectMovieToProgramData(){
        var selectedMovieIndex = selectMovie.value;
        var selectedProgramIndex= selectProgramElement.value;
        return{
            movie: selectedMovieIndex,
            program: selectedProgramIndex
        };
    }
    // Validate inputs
    function setMovieToProgramError(string){
        addMovieErrorElement.textContent = string;
    };   
    return {
        collectMovieData: collectMovieData,
        setMovieError : setMovieError,
        createMovie: createMovie,
        addMovieToDom: addMovieToDom,
        collectProgramData: collectProgramData,
        setProgramError: setProgramError,
        createProgram: createProgram,
        addProgramToDom: addProgramToDom,
        collectMovieToProgramData:collectMovieToProgramData,
        setMovieToProgramError: setMovieToProgramError,
        clearInputs: clearInputs
    }
})();
      

      
      
      
    
    
