"use strict"
function print(str) {
    console.log(str);
}

var toFahrenheit = function (temperatureC) {
    var temperatureF = temperatureC * 9 / 5 + 32;
    return temperatureF;
}

print(toFahrenheit(100));