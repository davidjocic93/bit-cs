var subjectModule = require('./subject');


var observer = function () {

    var notifyHandler = function () {
        console.log('Premalo memorije');
    };

    return {
        notify: notifyHandler
    };
};



module.exports.observer = observer;