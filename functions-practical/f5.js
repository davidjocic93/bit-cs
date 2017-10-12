function count(letter, string) {
    var counter = 0;
    for ( var i = 0; i < string.length; i++) {
        if (string[i] == letter) {
        counter++
        }
    } return counter;
}


console.log(count("m", "my random strinmmmg"));
