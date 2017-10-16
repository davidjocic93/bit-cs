"use strict"
function print(str) {
    console.log(str);
}

var maxMinElement = function (array) {
    var max = array[0];
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            continue;
        }
        if (array[i] > max) {
            max = array[i];
        }
    }
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            continue;
        }
        if (array[i] <= min) {
            min = array[i];
        }
    } return [min, max];
}

var array = [120, -55, "-265a", 3, 22, 5, 6, "5555a", 1025];
print(maxMinElement(array));

