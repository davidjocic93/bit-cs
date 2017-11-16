import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";

class SingleAuthor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {data: {
            id: "",
            name: "",
            username: "",
            email: "",
            address: {
              street: "",
              suite: "",
              city: "",
              zipcode: "",
              geo: {
                lat: "",
                lng: ""
              }
            },
            phone: "",
            website: "",
            company: {
              name: "",
              catchPhrase: "",
              bs: ""
            }
          }};
    }


    componentDidMount () {
        

        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
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
                <Link to='/'> <p> Back to Home </p></Link>
                <h1>{this.state.data.name}</h1>
                <h4>{this.state.data.username}</h4>
                <h4>{this.state.data.email}</h4>
                <h4>{this.state.data.phone}</h4>
                <hr/>
                <h4>{this.state.data.address.street}</h4>
                <h4>{this.state.data.address.city}</h4>
                <h4>{this.state.data.address.zipcode}</h4>
                <hr/>
                <h4>{this.state.data.company.name}</h4>
            </div>

        );
    }
}



export default SingleAuthor;