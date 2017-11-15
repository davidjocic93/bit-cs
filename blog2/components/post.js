import React from "react";
import ReactDOM from "react-dom";



class SinglePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {data: {}, data1: {}, data2: []};
    }

    componentDidMount () {
        

        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                this.setState({data: result});
            })
            .then(() => {
                    
                fetch(`https://jsonplaceholder.typicode.com/users/${this.state.data.userId}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((result) => {
                        this.setState({data1: result});
                    })
                    .then(() => {
                        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.state.data.userId}`)
                            .then((response) => {
                                return response.json();
                            })
                            .then((result) => {
                                this.setState({data2: result});
                                console.log(this.state.data2);
                            });
                    });

            });  
    }

    render () {
         return (
            <div>
                <h1>{this.state.data.title}</h1>
                <h3>{this.state.data1.name}</h3>
                <p>{this.state.data.body}</p>
                <hr/>
                <p>{this.state.data2.length} more posts from same author</p>
            </div>

        );
    }
}



export default SinglePost;