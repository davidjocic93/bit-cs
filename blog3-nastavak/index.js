import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import "babel-polyfill";
import {HashRouter} from "react-router-dom";

import App from "./components/app";

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById("app")
);
