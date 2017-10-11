function list (startNum, margin, div1, div2) {
    for (startNum; startNum <= margin; startNum++) {
        if (startNum % div1 === 0 && startNum % div2 === 0) {
            console.log("FizzBuzz");
        } else if (startNum % div1 === 0) {
            console.log("Fizz");
        } else if (startNum % div2 === 0) {
            console.log("Buzz")
        } else {
            console.log(startNum);
        }
    } return;
}

list(90, 120, 3, 4);