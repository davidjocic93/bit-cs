import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function goBack() {
    window.history.back()
}



class SinglePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = { data: {}, data1: {}, data2: []};
        this.loadData.bind(this);
    }

    loadData(id) {

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                this.setState({ data: result });
            })
            .then(() => {

                fetch(`https://jsonplaceholder.typicode.com/users/${this.state.data.userId}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((result) => {
                        this.setState({ data1: result });
                    })
                    .then(() => {
                        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.state.data.userId}`)
                            .then((response) => {
                                return response.json();
                            })
                            .then((result) => {
                                this.setState({ data2: result });
                            });
                    });

            });
    }

    componentWillReceiveProps(nextProps) {
        this.loadData(nextProps.match.params.id);
    }

    componentDidMount () {
        this.loadData(this.props.match.params.id);
    }


    goBack() {
        window.history.back();
    }

    render() {


        return (
            <div>
                <Link to='/'> <p> Back to Home </p></Link>
                <button onClick={this.goBack}>Back</button>
                <Link to={`/singleauthor/${this.state.data1.id}`}><h3 style={{textAlign: "right", fontSize: "1.1em"}}>Author: {this.state.data1.name}</h3></Link>
                <h1>{this.state.data.title}</h1>
                <p>{this.state.data.body}</p>
                <hr />
                <p>{this.state.data2.length} more posts from same author</p>
                <ul>
                    {this.state.data2.map((element, index) => {
                        return <li style={{display: "block"}} key={index}> <Link to={`${element.id}`} > Title: {element.id} - {element.title} </Link> </li>;
                    })}
                </ul>
            </div>

        );
    }
}



export default SinglePost;