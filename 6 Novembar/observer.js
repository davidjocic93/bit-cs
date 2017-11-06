var observer = function (name) {
    var myName = name;

    var notifyHandler = function (message) {
        console.log(myName + ":Desilo se" + message);
    }

    return {
        notify: notifyHandler
    }
}

var subject = function () {

    var observers = [];

    var subscribe = function (observer) {
        observers.push(observer);
    }



    var run = function () {

        for (var i = 0; i < 100; i++) {

            if (i % 11 === 0) {

                notifyAll(i)

            }
        }

    }

    var notifyAll = function (number) {
        
                for (i = 0; i < observers.length; i++) {
        
                    observers[i].notify(number);
        
                }
            }

    return {
        run: run,
        subscribe: subscribe
    }
}

var s = subject();
var o1 = observer("lampica");
var o2 = observer("sirena")

s.subscribe(o1);
s.subscribe(o2);


s.run();