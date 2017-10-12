function concatenate(input, n) {
    var text = '';
    for (var i = 1; i <= n; i++) {
        text = text + input;
    } return text;
}

console.log(concatenate("Aaa", 100));