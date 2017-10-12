function humanize (input) {
    var mod1;

    if (input >= 11 && input <= 20) {
        return input + "th"
    } else if (input % 10 === mod1) {
        switch (mod1) {
            case (1):
            return input + "st";
            break;
            case (2):
            return input + "nd";
            break;
            case (3):
            return input + "rd";
            break;
            case (4):
            case (5):
            case (6):
            case (7):
            case (8):
            case (9):
            case (0):
            return input + "th"
        }
    }
} 

console.log(humanize(1001));