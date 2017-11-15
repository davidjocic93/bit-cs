import React from "react";

import Post from "./post";





class MainContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {

        fetch("https://jsonplaceholder.typicode.com/posts").then(result => result.json()).then(result => {
            this.setState({ posts: result });
        });
    }

    render() {

        return (
            <main>
                <h1 style={{ textAlign: "center", paddingBottom: "30px" }}>POSTS</h1>
                {this.state.posts.map(post => {
                    return <Post post={post} key={post.id} />;
                })}
            </main>
        );
    }
}

export default MainContent;

