import React from "react";

class ComposeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "", post: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value });
        console.log("title: " + this.state.title);
        console.log("post: " + this.state.post);
    }



    handleSubmit(event) {
        let data = {
            userId: 1,
            title: this.state.title,
            body: this.state.post
        };
        console.log(data);
        this.props.onPostSubmited(data);
       
    }

    render() {
        return (
            <form>
                <label> Title <br /> <input name="title" type="text" value={this.state.titleString} onChange={this.handleChange} /> </label> <br /><br />
                <label> Post <br /> <textarea name="post" value={this.state.postString} onChange={this.handleChange} rows="4" cols="50" /> </label> <br /><br />
                <input type="button" onClick={this.handleSubmit} value="Submit"/>
            </form>
        );
    }
}

export default ComposeForm;