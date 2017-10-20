function sortWords (sentence) {

    return sentence.split('').sort().join('').trim();

}

console.log(sortWords("david jocic aaa bbb"));