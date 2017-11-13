import React from "react";
import ReactDOM from "react-dom";

const MyChild = (props) =>{
    return(
        <div>
            <h3> {props.message}</h3>
        </div>
    );
};

export default MyChild;

