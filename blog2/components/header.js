import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Timer from "./timer";
import Search from "./search";

const handler = function () {
    console.log("bla " + new Date().toTimeString());
};


const searchHandler = function (searchString) {
    console.log(searchString);
};






const Header = (props) => {
    return (
        <header>
            <h1>BIT Blog</h1>
            <nav>
                <Search onSearchRequest={searchHandler}/>
                <ul>
                    <li className="headerLinks"><Link to="/">Home</Link></li>
                    <li className="headerLinks"><Link to="/authors">Authors</Link></li>
                    <li className="headerLinks"><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;