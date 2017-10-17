'usestrict'

var greaterThanAverage = function () {
    var sum = 0;
    var avg = 0;
    newArr = [];

    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    avg = sum / arguments.length;

    for (var i = 0, j = 0; i < arguments.length; i++) {
        if (arguments[i] > avg) {
            newArr[j] = arguments[i];
            j++
        } else {
            continue;
        }
    }
    return "Average is " + avg + ". " + "This numbers are greater than average: " + newArr + ".";

}

console.log(greaterThanAverage(10, 2, 3, 4, 5, 6, 7, 8, 9));