function abbreviation(str) {
    var split = str.trim().split(" ");
    if (split.length > 1) {
        return (split[0] + " " + split[1].charAt(0) + ".");
    }
    return split[0];
};
console.log(abbreviation("David Jocic aaa vbbb"));