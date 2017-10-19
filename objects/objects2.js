function Student (name,lastname){
    this.name = name;
    this.lastname = lastname;
    this.occupation = "Copy writer";
    this.iAm = function () {
        return "I am " + this.name + " " + this.lastname + " and I am a " + this.occupation;
    };
}

var mitar = new Student ("Mitar", "Djakovic");
var david = new Student ("David", "Jocic");



// console.log(david.iAm());
// console.log(mitar.iAm());
// console.log(david.lastname);

var davidd = Student ("David", "Jocic");
// console.log(typeof(davidd));
// console.log(typeof(davidd.name));
console.log(name);


function createNewObject (name) {
    return {
        name: name
    };
}

var newObject = createNewObject ("square");
console.log(newObject.name);

var david = {age: 24};
var nikola = {age: 24};
var nenad = david;

console.log(david === nikola);
console.log(david === nenad);
nenad.age = 30;

console.log(david.age);
console.log(createNewObject("aaa"));
