var array = [1, 2, 3, 4, 5, 6];
var s = 0;
var p = 1;
var i;

for (i = 0; i < array.length; i += 1) {
    s += array[i];
    p *= array[i];
}
console.log('Sum : ' + s + ' Product :  ' + p); 