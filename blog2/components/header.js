import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <h1>Feminine Blog cause I'm a girl!</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/authors">Authors</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;