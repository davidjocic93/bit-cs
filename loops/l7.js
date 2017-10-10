var grade = [80, 77, 88, 95, 68];
var x;
var sum = 0;
for (var i = 0; i < grade.length; i++) {
    sum = sum + grade[i];
}
x = sum / grade.length;
if (x < 60) {
    console.log('F');
} else if (x < 70) {
    console.log('D');

} else if (x < 80) {
    console.log('C');
} else if (x < 90) {
    console.log('B');
}
else {
    console.log('A');
}

