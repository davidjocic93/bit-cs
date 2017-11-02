var dataController = (function () {

    var data = {
        students: [],
        studentsPassed: [],
        studentsFailed: [],
        totalNumOfStudents: 0
    }

    function Student(fullname, grade, subject) {
        this.fullname = fullname;
        this.grade = grade;
        this.subject = subject;
    }

    Student.prototype.getInfo = function () {
        return "Student: " + this.fullname + ". Grade: " + this.grade + ". Subject: " + this.subject;
    }

    function addStudent(fullname, grade, subject) {
        var student = new Student(fullname, grade, subject);

        data.students.push(student);

        if (student.grade == 5) {
            data.studentsFailed.push(student);
        } else {
            data.studentsPassed.push(student);
        }

        return student;
    }

    function calculateNumOfStudents() {
        var numOfStudents = data.students.length;
        return numOfStudents;
    }

    function calculateNumOfStudentsPassed() {
        var numOfStudentsPassed = data.studentsPassed.length;
        return numOfStudentsPassed;
    }

    function calculateNumOfStudentsFailed() {
        var numOfStudentsFailed = data.studentsFailed.length;
        return numOfStudentsFailed;
    }

    function calculatePercentagePassed() {
        var percentagePassed = (data.studentsPassed.length / data.students.length) * 100;
        return percentagePassed;
    }

    function calculatePercentageFailed() {
        var percentageFailed = (data.studentsFailed.length / data.students.length) * 100;
        return percentageFailed;
    }

    function calculateMonth() {
        var date = new Date();
        var month = date.getMonth();
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var currentMonth = monthNames[month];
        return currentMonth;
    }

    return {
        addStudent: addStudent,
        calculateNumOfStudents: calculateNumOfStudents,
        calculateNumOfStudentsPassed: calculateNumOfStudentsPassed,
        calculateNumOfStudentsFailed: calculateNumOfStudentsFailed,
        calculatePercentagePassed: calculatePercentagePassed,
        calculatePercentageFailed: calculatePercentageFailed,
        calculateMonth: calculateMonth
    }

})();

var UIController = (function () {


    var DOMStrings = {

        selectSubject: ".add-subject",
        inputName: ".add-student-name",
        inputGrade: ".add-grade",
        addButton: ".add-btn",
        passedListElement: ".passed-list",
        failedListElement: ".failed-list",
        containerNumOfStudents: ".exam-total-span",
        containerNumOfStudentsPassed: ".exam-passed-count",
        containerNumOfStudentsFailed: ".exam-failed-count",
        containerPercentagePassed: ".exam-passed-percentage",
        containerPercentageFailed: ".exam-failed-percentage",
        containerMonth: ".exam-title-month"
    }

    function getDOMStrnings() {
        return DOMStrings;
    }

    function getInput() {

        var nameElement = document.querySelector(DOMStrings.inputName);
        var gradeElement = document.querySelector(DOMStrings.inputGrade);
        var subjectSelectElement = document.querySelector(DOMStrings.selectSubject);
        var subjectOptionElement = subjectSelectElement[subjectSelectElement.selectedIndex];


        var result = {
            fullname: nameElement.value,
            grade: gradeElement.value,
            subject: subjectOptionElement.value
        }

        return result;
    }

    function displayError(input) {

        if (!input.subject) {
            alert("Please select subject!");
        } else if (!input.fullname) {
            alert("Please submit your name!");
        } else if (!input.grade) {
            alert("Please select grade!");
        }
    }

    function clearInputFields() {

        var nameElement = document.querySelector(DOMStrings.inputName);
        var gradeElement = document.querySelector(DOMStrings.inputGrade);
        var subjectSelectElement = document.querySelector(DOMStrings.selectSubject);

        subjectSelectElement.selectedIndex = 0;
        nameElement.value = "";
        gradeElement.value = "";

    }

    function displayStudent(student) {

        var passedList = document.querySelector(DOMStrings.passedListElement);
        var failedList = document.querySelector(DOMStrings.failedListElement);
        var gradeElement = document.querySelector(DOMStrings.inputGrade);
        var htmlItem = "<li>" + student.getInfo() + "</li>"

        if (gradeElement.value == 5) {
            failedList.insertAdjacentHTML("beforeend", htmlItem);
        } else {
            passedList.insertAdjacentHTML("beforeend", htmlItem);
        }
    }

    function displayNumOfStudents(numOfStudents) {
        document.querySelector(DOMStrings.containerNumOfStudents).textContent = numOfStudents;
    }

    function displayNumOfStudentsPassed(numOfStudentsPassed) {
        document.querySelector(DOMStrings.containerNumOfStudentsPassed).textContent = numOfStudentsPassed;
    }

    function displayNumOfStudentsFailed(numOfStudentsFailed) {
        document.querySelector(DOMStrings.containerNumOfStudentsFailed).textContent = numOfStudentsFailed;
    }

    function displayPercentagePassed(percentagePassed) {
        document.querySelector(DOMStrings.containerPercentagePassed).textContent = percentagePassed.toFixed(2) + "%";
    }

    function displayPercentageFailed(percentageFailed) {
        document.querySelector(DOMStrings.containerPercentageFailed).textContent = percentageFailed.toFixed(2) + "%";
    }

    function displayMonth (currentMonth) {
        document.querySelector(DOMStrings.containerMonth).textContent = currentMonth;
    }


    return {
        getInput: getInput,
        getDOMStrnings: getDOMStrnings,
        displayError: displayError,
        clearInputFields: clearInputFields,
        displayStudent: displayStudent,
        displayNumOfStudents: displayNumOfStudents,
        displayNumOfStudentsPassed: displayNumOfStudentsPassed,
        displayNumOfStudentsFailed: displayNumOfStudentsFailed,
        displayPercentagePassed: displayPercentagePassed,
        displayPercentageFailed: displayPercentageFailed,
        displayMonth: displayMonth
    }

})();

var mainController = (function (dataCtrl, UICtrl) {



    var DOM = UICtrl.getDOMStrnings();

    document.querySelector(DOM.addButton).addEventListener("click", function () {
        ctrlAddStudent();
    });

    function ctrlShowNumOfStudents() {

        var numOfStudents = dataCtrl.calculateNumOfStudents();

        UICtrl.displayNumOfStudents(numOfStudents);
    }

    function ctrlShowNumOfStudentsPassed() {

        var numOfStudentsPassed = dataCtrl.calculateNumOfStudentsPassed();

        UICtrl.displayNumOfStudentsPassed(numOfStudentsPassed);
    }

    function ctrlShowNumOfStudentsFailed() {

        var numOfStudentsFailed = dataCtrl.calculateNumOfStudentsFailed();

        UICtrl.displayNumOfStudentsFailed(numOfStudentsFailed);
    }

    function ctrlShowPercentagePassed() {
        var percentagePassed = dataCtrl.calculatePercentagePassed();
        UICtrl.displayPercentagePassed(percentagePassed);
    }

    function ctrlShowPercentageFailed() {
        var percentageFailed = dataCtrl.calculatePercentageFailed();
        UICtrl.displayPercentageFailed(percentageFailed);
    }

    function ctrlShowMonth () {
        var currentMonth = dataCtrl.calculateMonth();
        UICtrl.displayMonth(currentMonth);
    }

    ctrlShowMonth();

    

    function ctrlAddStudent() {

        var input = UICtrl.getInput();

        if (!input.fullname || !input.grade || !input.subject) {
            // throw new Error ('Error');
            UICtrl.displayError(input);
            return;
        }

        var student = dataCtrl.addStudent(input.fullname, input.grade, input.subject);


        UICtrl.clearInputFields();

        UIController.displayStudent(student);

        ctrlShowNumOfStudents();

        ctrlShowNumOfStudentsPassed();

        ctrlShowNumOfStudentsFailed();

        ctrlShowPercentagePassed();

        ctrlShowPercentageFailed();

        

        



    }

})(dataController, UIController);