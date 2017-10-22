function swapCase (sentence) {
    var newString = "";
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] === sentence[i].toLowerCase()) {
            newString += sentence[i].toUpperCase();
        } else {
            newString += sentence[i].toLowerCase();
        }
    } return newString;
}

console.log(swapCase("daviD jOciC"));