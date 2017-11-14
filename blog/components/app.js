import React from "react";
import Header from "./header";
import Footer from "./footer";
// import Timer from  "./timer";
import MainContent from "./mainContent";
import About from "./about";
import Authors from "./authors";
import { Switch, Route } from "react-router-dom";



class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* <Timer interval="1000" /> */}
                <Header />
                <Switch>
                    <Route exact path="/" component={MainContent} />
                    <Route path="/authors" component={Authors} />
                    <Route path="/about" component={About} />
                </Switch>
                <Footer />
            </div>
        );
    }
}


export default App;