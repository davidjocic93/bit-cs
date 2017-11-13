import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";

const Header = () => {
    return (

        <div style={{background: "skyblue", width: "100%", paddingLeft: "50px", color: "white",position: "fixed", top: "0"}}>
            <h1>Blog</h1>
        </div>

    );
};

export default Header;