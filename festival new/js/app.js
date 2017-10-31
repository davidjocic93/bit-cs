var dataController = (function () {

    var data = {
        movies: [],
        programs: []
    };

    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

    function addMovie(title, length, genre) {
        var movie = new Movie(title, parseFloat(length), genre);
        data.movies.push(movie);
        return movie;
    }

    return {
        addMovie: addMovie
    };

})();

var UIController = (function () {

    var DOMStrings = {
        inputTitle: ".movie-title",
        inputLength: ".movie-length",
        inputGenre: ".genre-select",
        containerMovieList: ".movie-list ul",
        buttonAddMovie: ".create-movie"
    }

    function collectInput() {
        var titleElement = document.querySelector(DOMStrings.inputTitle);
        var lengthElement = document.querySelector(DOMStrings.inputLength);
        var genreSelectElement = document.querySelector(DOMStrings.inputGenre);
        var genreOptionElement = genreSelectElement[genreSelectElement.selectedIndex];

        var result = {
            title: titleElement.value,
            length: lengthElement.value,
            genre: genreOptionElement.value
        }

        titleElement.value = "";
        lengthElement.value = "";
        genreSelectElement.value = "";
        return result;
    }

    function displayListItem(movie) {
        var listEl = document.querySelector(DOMStrings.containerMovieList);
        var htmlItem = "<li>" + movie.title + "</li>";

        listEl.insertAdjacentHTML("beforeend", htmlItem);
    }

    function getDOMStrigs() {
        return DOMStrings;
    }

    return {
        getInput: collectInput,
        displayListItem: displayListItem,
        getDOMStrigs: getDOMStrigs
    };

})();

var mainController = (function (dataCtrl, UICtrl) {

    // function setupEventListeners() {
    //     var DOM = UICtrl.getDOMStrigs();

    //     document.querySelector(DOM.buttonAddMovie).addEventListener("click", function (event) {
    //         ctrlAddMovieItem();
    //     });

    //     document.addEventListener("keydown", function (event) {
    //         if (event.keyCode === 13) {
    //             ctrlAddMovieItem();
    //         }
    //     });
    // }

    var DOM = UICtrl.getDOMStrigs();

    document.querySelector(DOM.buttonAddMovie).addEventListener("click", function (event) {
        ctrlAddMovieItem();
    });

    document.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            ctrlAddMovieItem();
        }
    });

    function ctrlAddMovieItem() {

        var input = UICtrl.getInput();

        var movie = dataCtrl.addMovie(input.title, input.length, input.genre);

        UICtrl.displayListItem(movie);
    };

    // return {
    //     init: function () {
    //         console.log("App has started");
    //         setupEventListeners: setupEventListeners;
    //     }
    // }

})(dataController, UIController);

// mainController.init();