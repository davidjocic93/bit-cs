

function summ(number1, number2, margin) {

    var sum = 0;

    if (typeof (number1) !== "number" || typeof (number2) !== "number" || typeof (margin) !== "number") {
        return "Uneta vrednost nije broj";
    } else {

        for (var x = 0; x < margin; x++) {

            if (x % number1 === 0 && x % number2 === 0) {
                sum += x;
            }
        }
    }

    return sum;
}

var result = summ(5, 3, "1000");
console.log(result);