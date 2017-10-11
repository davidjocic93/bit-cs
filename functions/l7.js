function avg (grades) {
    var sum = 0;
    for (var i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    var x = sum / grades.length;
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
    }  return x;
}

var txtGrade = avg([80, 77, 88, 95, 150]);
console.log(txtGrade);