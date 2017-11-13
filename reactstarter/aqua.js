import React from "react";
import ReactDOM from "react-dom";
import Fish from "./fish";

const Aqua = (props) => {
    let fishes = [];
    for (let i = 0; i < props.numOfFishes; i++) {
        
        fishes.push(<Fish />);

    }
    return (

        <div>
            {fishes}
        </div>

    );
};

export default Aqua;