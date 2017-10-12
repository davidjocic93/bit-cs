function count(letter, string) {
    var position;
    for (var i = 0; i <= string.length; i++) {
        if (string[i] == letter) {
            position = i;
            return position + 1;
        } 
    }  return -1;
}

console.log(count("r", "my random strinmmmg"));
