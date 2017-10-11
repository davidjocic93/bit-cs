function sumProd (array) {
    var s = 0;
    var p = 1;
    var i;
    var ret;
    
    for (i = 0; i < array.length; i += 1) {
        s += array[i];
        p *= array[i];
        ret = ('Sum : ' + s + ' Product :  ' + p);
    } return ret;
}

var result = sumProd([1,2,5,20,6]);
console.log(result);