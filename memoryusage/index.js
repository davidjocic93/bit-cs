var memUsageModule = require('./memusage');

var subjectModule = require('./subject');

var observer = require('./observer');


var o1 = observer.observer();

subjectModule.subscribe(o1);


// var o1 = observer.observer("aaaa");
// var o2 = observer.observer("bbb");

// subjectModule.subscribe(o1);
// subjectModule.subscribe(o2);

subjectModule.run();
