import React from "react";
import ComposeForm from "./composeform";


class Compose extends React.Component {
    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            arr: []
        };

    }

    submitHandler(data) {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then((data) => {
                data.id = Math.floor(Math.random() * 1000) + 100;

                if (!localStorage.getItem("posts")) {
                    localStorage.setItem("posts", JSON.stringify([]));
                }

                let postsString = localStorage.getItem("posts");
                let parsed = JSON.parse(postsString);

                parsed.push(data);
                let stringing = JSON.stringify(parsed);
                localStorage.setItem("posts", stringing);


                this.props.history.push("/");
            })
            .catch((error) => {
                console.log("Fetch Error :-S", error);
            });
    }

    render() {
        return (
            <div>
                <h1>Create New Blog</h1>
                <ComposeForm onPostSubmited={this.submitHandler} />
            </div>
        );
    }
}

export default Compose;