<<<<<<< HEAD
var a = [1, 2, 3, 4, 5, 6];
var s = 0;
var p = 1;

for (var i = 0; i < a.length; i += 1) {
    s += a[i];
    p *= a[i];
=======
var array = [1, 2, 3, 4, 5, 6];
var s = 0;
var p = 1;
var i;

for (i = 0; i < array.length; i += 1) {
    s += array[i];
    p *= array[i];
>>>>>>> 24264f19f7f5198df4d35a476abd46d91c7b05cb
}
console.log('Sum : ' + s + ' Product :  ' + p); 