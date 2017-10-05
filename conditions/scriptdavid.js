var a = 11;
var b = 4;
var c = 43;
var d = -1;
var e = -33;

if (a > b && a > c && a > d && a > e) {
    console.log("Najveci broj je " + a)
} else {
    if (b > c && b > d && b > e) {
        console.log("Najveci broj je " + b)
    } else {
        if (c > d && c > e) {
            console.log("Najveci broj je " + c)
        } else {
            if (d > e) {
                console.log("Najveci broj je " + d)
            } else {
                console.log("Najveci broj je " + e)
            }
        }
    }
}