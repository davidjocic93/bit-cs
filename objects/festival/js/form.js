//Array to store movies
var movies = [];
var programs = [];

function createMovie() {
    //Get references to elements
    var titleElement = document.getElementById("mTitle");
    var lengthElement = document.getElementById("mLength");
    var genreSelectElement = document.getElementById("genre-select");
    var genreOptionElement = genreSelectElement[genreSelectElement.selectedIndex];
    var movieListElement = document.getElementById("movie-list");
    var errorElement = document.getElementById("error");
    var programOfMoviesElement = document.getElementById("program-list");


    //Get needed values
    var title = titleElement.value;
    var length = lengthElement.value;
    var genre = genreOptionElement.value;


    //Validate form
    var isInvalidForm = !title || !length || (genre === "none");
    if (isInvalidForm) {
        errorElement.textContent = "Error";
        return;
    }

    //Reset error
    errorElement.textContent = "";

    //Create movie object
    var movie = new Movie(title, length, genre);

    //Add movie to list movies
    movies.push(movie);

    //
    movieListElement.innerHTML = createListHTML(movies);
    programOfMoviesElement.innerHTML = createMoviesListHTML(movies);


    titleElement.value = "";
    lengthElement.value = "";
    genreSelectElement.value = "none";

}

function createListHTML(array) {

    //Building our HTML starting with
    // open <ul> tag
    var movieListHTML = "<ul>";

    // Iterate array and for each element create
    // new <li> element and append to string
    for (var i = 0; i < array.length; i++) {
        var film = array[i];

        movieListHTML += "<li>" + film.getInfo() + "</li>";
    }

    //Finish list by closed </ul>
    movieListHTML += "</ul>";

    //Return formated
    return movieListHTML;
}

function createMoviesListHTML(array) {
    
        //Building our HTML starting with
        // open <ul> tag
        var movieListHTML = "";
    
        // Iterate array and for each element create
        // new <li> element and append to string
        for (var i = 0; i < array.length; i++) {
            var film = array[i];
    
            movieListHTML += "<option>"  + film.getOnlyTitle() + "</option>";
        }

    
        //Return formated
        return movieListHTML;
    }



function createProgram() {

    var dateElement = document.getElementById("programDate");
    var errorElement = document.getElementById("date-error");
    var dateListElement = document.getElementById("date-list");
    var dateProgramListElement = document.getElementById("program-date-list");

    var date = dateElement.value;

    var isInvalidDate = !date;
    if (isInvalidDate) {
        errorElement.textContent = "Error";
        return;
    }

    errorElement.textContent = "";

    var program = new Program(date);

    programs.push(program);

    dateListElement.innerHTML = createProgramsListHTML(programs);

    dateProgramListElement.innerHTML = createDateProgramListHTML(programs);




}

function createProgramsListHTML(array) {

    var programListHTML = "<ul>";


    // Iterate array and for each element create
    // new <li> element and append to string
    for (var i = 0; i < array.length; i++) {
        var program = array[i];

        programListHTML += "<li>" + program.getInfo() + "</li>";
    }

    //Finish list by closed </ul>
    programListHTML += "</ul>";

    //Return formated
    return programListHTML;
}

function createDateProgramListHTML(array) {
    
        //Building our HTML starting with
        // open <ul> tag
        var movieListHTML = "";
    
        // Iterate array and for each element create
        // new <li> element and append to string
        for (var i = 0; i < array.length; i++) {
            var program = array[i];
    
            movieListHTML += "<option>"  + program.getInfo() + "</option>";
        }

    
        //Return formated
        return movieListHTML;
    }

