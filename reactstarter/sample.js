import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
// import MyChild from "./child";
import Dog from "./dog";
import Aqua from "./aqua";
// import Fish from "./fish";


const MyComponent = (props) => {
    if (props.size <= 49) {

        return (
            <Aqua numOfFishes = "10" />
        );

    } else {
        return (
            <div>
                <h1><Dog /></h1>
            </div>
        );
    }
    // return (
    //     <div>
    //         <h1>{props.name}</h1>
    //         <h2>{props.surname}</h2>
    //         <h3>{props.date}</h3>
    //         < MyChild message="gadhskjghds" />
    //         < MyChild message="hrsehserh" />
    //         < MyChild message="dfshfh" />
    //     </div>
    // );
};


// ReactDOM.render(MyComponent({
//     // <MyComponent name="Imenko Prezimenkovic"/>,
//     name: "askjfgaskj",
//     surname: "sdhgwHGlk",
//     date: new Date().getFullYear().toString()
// }),
// document.getElementById("app")
// );

ReactDOM.render(<MyComponent size = "40"/>,
    document.getElementById("app")
);