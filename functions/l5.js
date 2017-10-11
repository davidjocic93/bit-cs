function print (array) {
    for (var i in array) {
        console.log("row : " + i);
        for (var j in array[i]) {
            console.log(" " + array[i][j]);
        };
    } 
}

print ( [ [1, 2, 4, 5], [ 24, 22, 24, 11], [22, 56, 77, 22], [ 44, 111, 421, 422] ] );