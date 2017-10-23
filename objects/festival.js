
(function () {

    function createMovie(mTitle, mLength, genreName) {

        var genre = new Genre(genreName);
        return new Movie(mTitle, genre, mLength);
    }

    function createProgram(date) {

        return new Program(date);
    }

    var terminator = createMovie("Terminator", 140, "Action");
    var spiderman = createMovie("Spiderman", 130, "Fantasy");
    var shutterIsland = createMovie("Shutter Island", 124, "Drama");
    var rideAlong = createMovie("Ride Along", 145, "Comedy");

    var prog = createProgram(new Date());
    var prog1 = createProgram(new Date());

    prog.addMovie(terminator);
    prog.addMovie(spiderman);
    prog.addMovie(shutterIsland);

    prog1.addMovie(rideAlong);

    var filmskiSusreti = new Festival("Filmski susreti");
    filmskiSusreti.addProgram(prog);
    filmskiSusreti.addProgram(prog1);

    console.log(filmskiSusreti.getData());


}());

function Genre(genreName) {
    this.name = genreName;

    this.getData = function () {
        var output = this.name[0] + this.name[this.name.length - 1];
        return output.toUpperCase();
    }
}

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;

    this.getData = function () {
        return this.title + ", " + this.length + ", " + this.genre.getData();
    }
}

function Program(date) {
    this.date = date;
    this.listOfMovies = [];
    this.numOfMoviesInProgram = 0;
    this.lengthOfAllMovies = 0;

    this.addMovie = function (movie) {
        this.listOfMovies.push(movie);
        this.numOfMoviesInProgram++;
        this.lengthOfAllMovies += movie.length;
    }

    this.getData = function () {
        var justMovie = "";
        for (var i = 0; i < this.listOfMovies.length; i++) {
            var movie = this.listOfMovies[i];
            justMovie += "\t\t" + movie.getData() + "\n";
        }
        return "Program date: " + this.date + ", Program length: " + this.lengthOfAllMovies + " minutes" +  "\n" + justMovie;
    }
}

function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.totalNumOfMovies = 0;

    this.addProgram = function (program) {
        this.listOfPrograms.push(program);
        this.totalNumOfMovies += program.numOfMoviesInProgram;
    }

    this.getData = function () {
        var output = '';
        output += "Name of the festival: " + this.name + ", Number of movies: " + this.totalNumOfMovies + "\n";

        for (var i = 0; i < this.listOfPrograms.length; i++) {
        var program = this.listOfPrograms[i];
            output += "\t" + program.getData() + "\n";
        }

        return output;

    }
}

    // this.getData = function () {
    //     var moviesNum = 0;

    //     for (var i = 0; i < this.listOfPrograms.length; i++) {
    //         var program = this.listOfPrograms[i];
    //         moviesNum  += program.listOfMovies.length; 
    //         this.totalNumOfMovies++;
    //     }
    //     return this.name + " Numbers of movies:" + " " + this.program.getData();
    // }
