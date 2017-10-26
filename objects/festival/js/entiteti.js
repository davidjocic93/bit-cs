function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
}

Movie.prototype.getInfo = function () {
    return this.title + ", " + this.length + " minutes, " + this.genre.toUpperCase();
}

Movie.prototype.getOnlyTitle = function () {
    return this.title;
}

function Program(date) {
    this.date = date;
    this.listOfMovies = [];
    this.numOfMoviesInProgram = 0;
    this.lengthOfAllMovies = 0;
}

Program.prototype.addMovie = function (movie) {

    this.listOfMovies.push(movie);
    this.numOfMoviesInProgram++;
    this.lengthOfAllMovies += movie.length;
}

Program.prototype.getInfo = function () {
    var justMovie = "";
    for (var i = 0; i < this.listOfMovies.length; i++) {
        var movie = this.listOfMovies[i];
        justMovie += "\t\t" + movie.getData() + "\n";
    }
    return "Program date: " + this.date;
}

