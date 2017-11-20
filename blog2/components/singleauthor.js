import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class SingleAuthor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
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
            }
        };
    }


    componentDidMount() {


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

    goBack() {
        window.history.back();
    }


    render() {
        return (
            <div>
                <Link to='/'> <p> Back to Home </p></Link>
                <button onClick={this.goBack}>Back</button>
                <h1>{this.state.data.name}</h1>
                <hr/>
                <h3 style={{color: "grey"}}>Personal info</h3>
                <h4 style={{paddingLeft: "30px"}}> Username: {this.state.data.username}</h4>
                <h4 style={{paddingLeft: "30px"}}> Email: {this.state.data.email}</h4>
                <h4 style={{paddingLeft: "30px"}}> Phone: {this.state.data.phone}</h4>
                <hr />
                <h3 style={{color: "grey"}}>Adress</h3>
                <h4 style={{paddingLeft: "30px"}}> Street: {this.state.data.address.street}</h4>
                <h4 style={{paddingLeft: "30px"}}> City: {this.state.data.address.city}</h4>
                <h4 style={{paddingLeft: "30px"}}> Zipcode: {this.state.data.address.zipcode}</h4>
                <hr />
                <h3 style={{color: "grey"}}>Company</h3>
                <h4 style={{paddingLeft: "30px"}}> Name: {this.state.data.company.name}</h4>
            </div>

        );
    }
}



export default SingleAuthor;