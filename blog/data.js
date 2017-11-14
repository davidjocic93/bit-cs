import React from "react";

class Data {

    getData(notifyGetData) {
        fetch("https://jsonplaceholder.typicode.com/posts").then(result => result.json()).then(result => {
            notifyGetData(result);
        });
    }
}

export default Data;