var a = [1, 2, 3, 4, 5, 6];
var s = 0;
var p = 1;

for (var i = 0; i < a.length; i += 1) {
    s += a[i];
    p *= a[i];
}
console.log('Sum : ' + s + ' Product :  ' + p); 