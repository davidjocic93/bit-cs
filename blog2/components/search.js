import React from "react";

class Search extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            searchString: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    handleInput (event) {
        this.setState ({
            searchString: event.target.value
        });
        // console.log(this.state.searchString);
    }

    handleButton () {
        let searchString = this.state.searchString;
        this.props.onSearchRequest(searchString);
        this.setState ({
            searchString: ""
        });
    }

    render () {
        return (
            <div>
                <input value={this.state.searchString} onChange={this.handleInput}/>
                <button onClick={this.handleButton}>Search</button>
            </div>
        );
    }
}

export default Search;