const dataController = (() => {

    let data = {
        movies: [],
        totalMoviesLength: 0,
        programs: []
    };

    class Movie {
        constructor(title, length, genre) {

            this.title = title;
            this.length = length;
            this.genre = genre;
        }

        getInfo() {
            return `${this.title}, ${this.length}, ${this.genre}`;
        }
    }

    function calculateLength() {
        let total = 0;
        data.movies.forEach(currentMovie => {
            total += currentMovie.length;
        });
        data.totalMoviesLength = total;
    }
    return {
        
        addMovie(title, length, genre) {
            const movie = new Movie(title, parseFloat(length), genre);
            data.movies.push(movie);
            return movie;
        }

    };

})();

const UIController = (() => {

    const DOMStrings = {
        inputTitle: ".movie-title",
        inputLength: ".movie-length",
        inputGenre: ".genre-select",
        containerMovieList: ".movie-list ul",
        buttonAddMovie: ".create-movie",
        formElement: "form",
        movieErrorElement: ".movie-error"
    }

    return { 

     getInput() {
        let titleElement = document.querySelector(DOMStrings.inputTitle);
        let lengthElement = document.querySelector(DOMStrings.inputLength);
        let genreSelectElement = document.querySelector(DOMStrings.inputGenre);
        let genreOptionElement = genreSelectElement[genreSelectElement.selectedIndex];

        const result = {
            title: titleElement.value,
            length: lengthElement.value,
            genre: genreOptionElement.value
        }

      
        return result;
    },

     displayListItem(movie) {
        let listEl = document.querySelector(DOMStrings.containerMovieList);
        let htmlItem = "<li>" + movie.getInfo() + "</li>";

        listEl.insertAdjacentHTML("beforeend", htmlItem);
    },

     clearFormInputs() {
        document.querySelector(DOMStrings.formElement).reset();
        document.querySelector(DOMStrings.movieErrorElement).textContent = "";
    },

     showError(input) {
        let errorMsg = "Unknown error";
        if (!input.title) {
            errorMsg = "Enter title!"
        } else if (!input.length) {
            errorMsg = "Enter length!"
        } else if (!input.genre) {
            errorMsg = "Enter genre!"
        }

        document.querySelector(DOMStrings.movieErrorElement).textContent = errorMsg;
    },

     getDOMStrigs() {
        return DOMStrings;
    }
}


})();

const mainController = ((dataCtrl, UICtrl) => {

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

    let DOM = UICtrl.getDOMStrigs();

    document.querySelector(DOM.buttonAddMovie).addEventListener("click", event => {
        ctrlAddMovieItem();
    });

    // document.addEventListener("keydown", ({keyCode}) =>  {
    //     if (keyCode === 13) {
    //         ctrlAddMovieItem();
    //     }
    // });

    function ctrlAddMovieItem() {

        let {title, genre, length} = UICtrl.getInput();

        if (!title || !genre || !length) {
            // // throw new Error("Please fill all fields properly");
            // alert("Please fill all fields properly");
            // return;
            let input = {title, genre, length};
            UICtrl.showError(input);
            return;
        }

        const movie = dataCtrl.addMovie(title, length, genre);

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