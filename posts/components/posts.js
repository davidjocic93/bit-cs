import React from "react";
import ReactDOM from "react-dom";
import data from "../data";
import "babel-polyfill";


const Posts = () => {

    const listItems = data.items.map((item) => 
        <li  key={item.id} style={{listStyleType: "none", listStylePosition: "inside", border: "1px solid white", padding: "5px"}}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
        </li>
    );

    return (

        <div style={{ background: "black", width: "100%", color: "skyblue" }}>
            <ul style={{width: "80%"}}>{listItems}</ul>
        </div>

    );
};

export default Posts;