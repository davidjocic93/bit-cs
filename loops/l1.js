var x = 0;

for (x = 0; x <= 15; x++) {
    if (x === 0) {
        console.log (x + " nije deljiv")
    }
    else if (x % 2 === 0) {
        console.log(x + " je paran broj");
    } else {
        console.log(x + " je neparan broj broj");
    }
}