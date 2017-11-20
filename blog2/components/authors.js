import React from "react";
import { Link } from "react-router-dom";


const Author = (props) => {
    return (
        <div className="col-12 col-md-6 authorsDiv">
            <div style={{ display: "block" }} className="authors">
                <h3 style={{ display: "block" }}>{props.name}</h3>
            </div>
        </div>
    );
};

class GetAuthors extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                this.setState({
                    data: result,
                });
            });
    }

    render() {
        return (
            this.state.data.map((author) => <Link to={`/singleauthor/${author.id}`}><Author className="authors1" name={author.name} website={author.website} key={author.id} /></Link>)
        );
    }

}

const Authors = (props) => {
    return (
        <div className="row">
            <Link to='/'> <p> Back to Home </p></Link>
            <div className="col-12">
                <h1 id="authorsTitle">- Our Authors -</h1>
            </div>
            <GetAuthors />
            <hr />
        </div>
    );
};




export default Authors;