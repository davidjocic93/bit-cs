function write(array) {

    var stringa = '';
    var i = 0;
    var rez;

    while (i < array.length) {
        stringa = stringa + array[i];
        i++;
        rez = stringa;
    } return rez;
}

var result = write([1,2,4,"a",NaN,"C",undefined, "david"]);
console.log(result);