import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";


const Footer = (props) => {
    return (
        <footer>
             <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/authors">Authors</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <p className = "footerPar">***Created by MargieDev***</p>
        </footer>
    );
};

export default Footer;