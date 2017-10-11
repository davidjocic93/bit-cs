function square (numer1, margin) {

    var total = 0;

    for (numer1; numer1 <= margin; numer1++) {
    total += numer1 * numer1;

} return total;
}

var result = square(1,2);
console.log(result);