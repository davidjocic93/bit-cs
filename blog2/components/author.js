import React from "react";
import ReactDOM from "react-dom";

class SingleAuthor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {data: {}};
    }


    componentDidMount () {
        

        fetch(`https://jsonplaceholder.typicode.com/users/${}`)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                this.setState({
                    data: result,
                });
            });
    }


    render () {
        return (
            <div>
                <h1>{this.state.data.name}</h1>
            </div>

        );
    }
}



export default SingleAuthor;