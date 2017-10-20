function changeBase (num, base1, base2) {
    var base2 = base2 || 10;
    var conv = parseInt (num, base1);
    return conv.toString(base2);
    
}

console.log(changeBase("ff",16));

