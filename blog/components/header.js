import React from "react";
import App from "./app";
import About from "./about";
import Authors from "./authors";
// import { BrowserRouter } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";
import {Link} from "react-router-dom";


const Header = function(){
    return (
        <header style={{display: "block", paddingBottom: "100px"}}>
            <h1 style={{position: "absolute", top: "0", left: "0", marginLeft: "100px"}}>Blog</h1>
            <nav>
                <ul style={{listStyleType: "none", position: "absolute", top: "0", right: "0", marginRight: "100px"}}>
                    <li style={{float: "left", padding: "5px", borderRight: "2px solid black"}}><Link to="/">Home</Link></li>
                    <li style={{float: "left", padding: "5px", borderRight: "2px solid black"}}><Link to="/authors">Authors</Link></li>
                    <li style={{float: "left", padding: "5px"}}><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
