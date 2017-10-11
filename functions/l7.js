function avgGrade(grades) {

    var avg;
    var sum = 0;

    for (var i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    avg = sum / grades.length;
    if (avg < 60) {
        return "Average grade is " + avg + ", which is equal to F.";
    } else if (avg < 70) {
        return "Average grade is " + avg + ", which is equal to D.";
    } else if (avg < 80) {
        return "Average grade is " + avg + ", which is equal to C.";
    } else if (avg < 90) {
        return "Average grade is " + avg + ", which is equal to B.";
    } else {
        return "Average grade is " + avg + ", which is equal to A.";
    }
}
    var output = avgGrade([55, 63, 71, 89, 92]);
    console.log(output);