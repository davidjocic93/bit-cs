'usestrict'

var bodyMassIndex = function (weight, height, newFunc) {
    var bmi = weight / newFunc(height);
    if (bmi < 15) {
        return "Starvation!";
    } else if (bmi < 17.5) {
        return "Anorexic!";
    } else if (bmi < 18.5) {
        return "Underweight!";
    } else if (bmi < 25) {
        return "Ideal!";
    } else if (bmi < 30) {
        return "Overweight!";
    } else if (bmi < 40) {
        return "Obese!";
    } else {
        return "Morbidly obese!";
    }
}

function square (a) {
    return a * a;
}

console.log(bodyMassIndex(82, 1.86, square));