function padding (string, length, side) {
    if (typeof length != "number") {
        console.log("Length must be entered as a number");
    } else {
    switch (side.toLowerCase().charAt(0)) {
        case "l":
        case "s":
            return string.padStart(length);
        case "r":
        case "e":
            return string.padEnd(length);
    }
}
}

console.log(padding("aaa", 10, "start"));