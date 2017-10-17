'usestrict'

var average = function () {
    var sum = 0;
    var avg = 0;

    for (var i = 0; i < arguments.length; i++) {
       sum += arguments[i];
    }
    avg = sum / arguments.length;    
    return avg;
}

console.log(average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));