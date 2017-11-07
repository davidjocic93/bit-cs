console.log("Cao cao");

var p1 = new Promise(function (resolve, reject) {


    for (var i = 0; i < 100; i++) {
        setTimeout(function (i) {
            console.log("p1 " + i);
            if (i === 99) {
                resolve();
            }
        }, i, i);
    }

    // var now = new Date();

    // if (now.getMilliseconds() % 2 === 0) {
    //     reject("parno, rejected");
    // }

    console.log("Done")

});

var p2 = new Promise(function (resolve, reject) {

    for (var x = 0; x < 300; x++) {
        setTimeout(function (x) {
            console.log("p2." + x);
            if (x === 299) {
                resolve();
            }
        }, x, x);

    }

})



console.log("keep working");

p1.then(function(res) {
    console.log("p1 done with " + res );
});

p2.then(function (res) {
    console.log("p2 done with " + res);
});

var allPromises = Promise.race([p1, p2]);

allPromises.then(function(){

    console.log("All promises done");
});



