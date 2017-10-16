"use strict"
function print(str) {
    console.log(str);
}

var maxElement = function (array) {
    var res = 0;
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            continue;
        }
        if (array[i] > res) {
            res = array[i];
        }
    } return res;
}


var array = [120, 2, 3, 22, 5, 6, "555a", 1025];
print(maxElement(array));

