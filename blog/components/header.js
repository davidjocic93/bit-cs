import React from "react";
import App from "./app";
import About from "./about";
import Authors from "./authors";
// import { BrowserRouter } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";
import {Link} from "react-router-dom";


const Header = function(){
    return (
        <header>
            <h1>Blog</h1>
            <nav>
                <ul style={{listStyleType: "none"}}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/authors">Authors</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
