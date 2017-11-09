var os = require('os');

var memusage = function () {

        var freemem = os.freemem();
    return freemem / 1048576;
    
}

console.log(os.freemem()/1048576);

module.exports.memusage = memusage;

// console.log(os.freemem()/1048576);

// console.log(memusage())360