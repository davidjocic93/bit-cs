var student = {
    firstname: "David",
    lastname: "Jocic",
    occupation: {
        day: "studying",
        night: "betting",
    },
    age: 24,
    school: {
        name: "BIT",
        adress: "Nemanjina 4",
        students: ["David", "Dusan", "Marko"],
    },
    say: function () {
        return "My name is David Jocic";
    },
    calculateAgeOfBirth: function () {
        return 2017 - student.age;
    },
}

console.log(student.firstname);
console.log(student.school.name);
console.log(typeof student);
console.log(student.say());
console.log(student.calculateAgeOfBirth());
console.log(student.school.students[2]);
console.log(student.occupation.night);