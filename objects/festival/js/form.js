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
    var secondMovieListElement = document.getElementById("program-list");

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
    movieListElement.innerHTML = createMovieList();
    secondMovieListElement.innerHTML = createSecondMovieList();

    //Reset values
    titleElement.value = "";
    lengthElement.value = "";
    genreSelectElement.value = "none";

}

function createMovieList() {

    //Building our HTML starting with
    // open <ul> tag
    var movieListHTML = "<ul>";

    // Iterate array and for each element create
    // new <li> element and append to string
    for (var i = 0; i < movies.length; i++) {
        var film = movies[i];
        movieListHTML += "<li>" + film.getInfo() + "</li>";
    }

    //Finish list by closed </ul>
    movieListHTML += "</ul>";

    //Return formated
    return movieListHTML;
}

function createSecondMovieList() {
    var secondMovieListHTML = "";
    for (var i = 0; i < movies.length; i++) {
        var film = movies[i];
        secondMovieListHTML += "<option value=\"" + i + "\">" + film.title + "</option>";
    }
    return secondMovieListHTML;
}

function createProgram() {

    var dateElement = document.getElementById("programDate");
    var dateListElement = document.getElementById("date-list");
    var dateProgramListElement = document.getElementById("program-date-list");
    var errorElement = document.getElementById("date-error");

    var date = dateElement.value;

    var isInvalidDate = !date;
    if (isInvalidDate) {
        errorElement.textContent = "Error";
        return;
    }

    errorElement.textContent = "";

    var program = new Program(date);
    programs.push(program);

    dateListElement.innerHTML = createProgramList();
    dateProgramListElement.innerHTML = createSecondProgramList();
}

function createProgramList() {
    var programListHTML = "<ul>";
    for (var i = 0; i < programs.length; i++) {
        var program = programs[i];
        programListHTML += "<li>" + program.getInfo() + "</li>";
    }
    programListHTML += "</ul>";
    return programListHTML;
}

function createSecondProgramList() {
    var secondProgramListHTML = "";
    for (var i = 0; i < programs.length; i++) {
        var program = programs[i];
        secondProgramListHTML += "<option value=\"" + i + "\">" + program.date + "</option>";
    }
    return secondProgramListHTML;
}

function addMovieToProgram () {

    var movieElement = document.getElementById("program-list");
    var movieSelectElement = movieElement[movieElement.selectedIndex];
    var programElement = document.getElementById("program-date-list");
    var programSelectElement = programElement[programElement.selectedIndex];
    var movieProgramElement = document.getElementById("movie-to-program-list");

    var movieValue = movieSelectElement.value;
    var programValue = programSelectElement.value;

    programs[programValue].listOfMovies.push(movies[movieValue]);
    movieProgramElement.textContent = "Film " + movies[movieValue].title.toUpperCase() + " je dodat programu: " + programs[programValue].date;

}

function festivalInfo () {
    var festivalInfoElement = document.getElementById("festival-info");
   
    festivalInfoElement.innerHTML = createInfo();
}

function createInfo  () {
    var festivalInfo = "<p>Festival info: </p>";
    for (var i = 0; i < programs.length; i++) {
        festivalInfo += "<p> Program date: " + programs[i].date + "</p>";
        for (var j = 0; j < programs[i].listOfMovies.length; j++) {
            festivalInfo += "<p> Film: " + programs[i].listOfMovies[j].getInfo() + "</p>";
        }
    }
    return festivalInfo;
}
