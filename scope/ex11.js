'usestrict'
var firstMiddleLast = function (array) {
    var first = array[0];
    var middle = array.length / 2;
    var last = array[array.length - 1];
    var newArr = [];
    
    if (array.length % 2 === 0) {
        newArr[0] = first;
        newArr[1] = last;
        return newArr;
    } else {
        newArr[0] = first;
        newArr[1] = parseInt(middle) + 1;
        newArr[2] = last;
        return newArr;
        
    }
}

console.log(firstMiddleLast([1, 2, 3, 4, 5, 6, 9, 1]));
console.log(firstMiddleLast([1, 2, 3, 8, 9]));