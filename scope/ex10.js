var mostFrequent = function (array) {
    var counter = 0;
    var newCounter = 0;
    var element;
    for (var i = 0; i < array.length; i++) {
        for (var j = i; j < array.length; j++) {
            if (array[i] == array[j]) {
                counter++;
            }
        }
        if (counter > newCounter) {
            newCounter = counter;
            element = array[i];
        }
        counter = 0;
    }
    return "The most frequent element is " + element + ".";
}

console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9]));