import React from "react";
import ReactDOM from "react-dom";
import Data from "./data";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";



const Post = (props) => {
    return (
        <div className="col-12 col-md-6 posts">
            <div className="box-border">
                <h3>{props.title}</h3>
                <p>{props.body}</p>
                <hr/>
            </div>
        </div>
    );
};



class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = {data: []};

    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                this.setState({
                    data: result,
                });
            });
    }
   
    render(){
        return (
            this.state.data.map((post) =>  <Link to={`/post/${post.id}`}><Post title={post.title} body={post.body} key={post.id}/></Link> )
        );
    }

}

const Main = (props) => {
    return (
        <div className="row">
            <Posts />
        </div>
    );
};

// Post.propTypes = {
//     title: PropTypes.string.isRequired,
//     body: PropTypes.string.isRequired,
//     // id: PropTypes.oneOf([1, 2, 3, 4, 5]),
//     word: PropTypes.oneOf(["one", "paper", "whatever"])
// };

// const Posts = (props) => {
//     return (
//         Data.items.map((post) => <Post title={post.title} body={post.body} key={post.id} id={post.id}/> )
//     );
// };


export default Main;