var sum = 0;
<<<<<<< HEAD
for (var x = 0; x <= 1000; x++) {
=======
for (var x = 0; x < 1000; x++) {
>>>>>>> 24264f19f7f5198df4d35a476abd46d91c7b05cb

    if (x % 3 === 0 && x % 5 === 0) {
        sum += x;
    }
}
console.log(sum);