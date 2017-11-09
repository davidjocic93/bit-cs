var memUsageModule = require('./memusage');
// var observer = require("./observer")

var observers = [];

var subscribe = function (observer) {
    observers.push(observer);
};


var run = function () {
    
    
    
    setInterval(function () {
        if (memUsageModule.memusage() < 3000) {
            notifyAll();
        } else {
            console.log(memUsageModule.memusage());
        }
    }, 1000);
};


var notifyAll = function (number) {
    
    for (var i = 0; i < observers.length; i++) {
        
        observers[i].notify(number);
        
    }
};

module.exports.subscribe = subscribe;
module.exports.run = run;
