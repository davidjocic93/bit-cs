function evenOdd(num) {
        if (num === 0) {
            console.log(num + " nije deljiv")
        }
        else if (num % 2 === 0) {
            console.log(num + " je paran broj");
        } else {
            console.log(num + " je neparan broj");
        }
    }


evenOdd(55);