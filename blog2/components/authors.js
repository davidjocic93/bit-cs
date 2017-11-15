import React from "react";


const Author = (props) => {
    return (
        <div className="col-12 col-md-6 authorsDiv">
            <div className="authors">
                <h3>{props.name}</h3>
                <h4>E-mail: {props.website}</h4>
            </div>
        </div>
    );
};

class GetAuthors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }
    componentDidMount(){
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

     render(){
         return(
            this.state.data.map((author) => <Author name={author.name} website={author.website} key={author.id}/> )
         );
     }

}

const Authors = (props) => {
    return (
        <div className="row">
            <div className="col-12">
                <h1 id="authorsTitle">- Our Authors -</h1>
            </div>
            <GetAuthors />
        </div>
    )
}




export default Authors;