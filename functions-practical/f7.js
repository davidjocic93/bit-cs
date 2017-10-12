function count(letter, string) {
    var position;
    for (var i = string.length; i >= 0; i--) {
        if (string[i] == letter) {
            position = i;
            return position - 1;
        } 
    }  return -1;
}

console.log(count("g", "my randomg strinmmmg"));
