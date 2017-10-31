var dataController = (function () {

    var data = {
        movies: [],
        totalMoviesLength: 0,
        programs: []
    };

    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

    Movie.prototype.getInfo = function () {
        return this.title + ", " + this.length + ", " + this.genre;
    }

    function addMovie(title, length, genre) {
        var movie = new Movie(title, parseFloat(length), genre);
        data.movies.push(movie);
        return movie;
    }

    function calculateLength () {
        var total = 0;
        data.movies.forEach(function (currentMovie, index, array) {
            total+= currentMovie.length;
        });
        data.totalMoviesLength = total;
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
        buttonAddMovie: ".create-movie",
        formElement: "form",
        movieErrorElement: ".movie-error"
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

        // titleElement.value = "";
        // lengthElement.value = "";
        // genreSelectElement.value = "";
        return result;
    }

    function displayListItem(movie) {
        var listEl = document.querySelector(DOMStrings.containerMovieList);
        var htmlItem = "<li>" + movie.getInfo() + "</li>";

        listEl.insertAdjacentHTML("beforeend", htmlItem);
    }

    function clearFormInputs () {
        document.querySelector(DOMStrings.formElement).reset();
        document.querySelector(DOMStrings.movieErrorElement).textContent = "";
    }

    function showError (input) {
        var errorMsg = "Unknown error";
        if (!input.title) {
            errorMsg = "Enter title!"
        } else if (!input.length) {
            errorMsg = "Enter length!"
        } else if (!input.genre) {
            errorMsg = "Enter genre!"
        }

        document.querySelector(DOMStrings.movieErrorElement).textContent = errorMsg;
    }

    function getDOMStrigs() {
        return DOMStrings;
    }

    return {
        getInput: collectInput,
        displayListItem: displayListItem,
        getDOMStrigs: getDOMStrigs,
        clearFormInputs: clearFormInputs,
        showError: showError
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

        if (!input.title || !input.genre || !input.length) {
            // // throw new Error("Please fill all fields properly");
            // alert("Please fill all fields properly");
            // return;
            UICtrl.showError(input);
            return;
        }

        var movie = dataCtrl.addMovie(input.title, input.length, input.genre);

        UICtrl.displayListItem(movie);

        UICtrl.clearFormInputs();
    };

    // return {
    //     init: function () {
    //         console.log("App has started");
    //         setupEventListeners: setupEventListeners;
    //     }
    // }

})(dataController, UIController);

// mainController.init();