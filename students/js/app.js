var dataController = (function () {

    var data = {
        students: [],
        totalNumOfStudents: 0
    }

    function Student(fullname, grade, subject) {
        this.fullname = fullname;
        this.grade = grade;
        this.subject = subject;
    }

    Student.prototype.getInfo = function () {
        return "Student: " + this.fullname + ". Grade: " + this.grade + ". Subject: ";
    }

    function addStudent (subject, fullname, grade) {
        var student = new Student (subject, fullname, grade);

        data.subject.push(student);

        return student;
    }

})();

var UIController = (function () {

    var DOMStrings = {

        selectSubject: ".add-subject",
        inputName: ".add-student-name",
        inputGrade: ".add-grade",
        addButton: ".add-button",
        passedListElement: ".passed-list",
        failedListElement: ".failed-list"
    }

    function getDOMStrnings () {
        return DOMStrings;
    }

    function getInput() {

        var nameElement = document.querySelector(DOMStrings.inputName);
        var gradeElement = document.querySelector(DOMStrings.inputGrade);
        var subjectSelectElement = document.querySelector(DOMStrings.selectSubject);
        var subjectOptionElement = subjectSelectElement[subjectSelectElement.selectedIndex];


        var result = {
            name: nameElement.value,
            grade: gradeElement.value,
            subject: subjectOptionElement.value
        }

        return result;
    }

    function displayError (input) {

        if (!input.subject) {
            alert("Please select subject!");
        } else if (!input.fullname) {
            alert("Please submit your name!");
        } else if (!input.grade) {
            alert("Please select grade!");
        }
    }

    function clearInputFields () {
        subjectOptionElement.value = "none";
        nameElement.value = "";
        gradeElement.value = "";

    }

    function displayStudent () {

        var passedList = document.querySelector(DOMStrings.passedListElement);
        var failedList = document.queryCommandEnabled(DOMStrings.failedListElement);

        if (gradeElement.value == 5) {

        }

    }

    return {
        getInput: getInput,
        getDOMStrnings: getDOMStrnings,
        displayError: displayError,
        clearInputFields: clearInputFields
    }

})();

var mainController = (function (dataCtrl, UICtrl) {

    function setupEventListeners () {

        var DOM = UICtrl.getDOMStrnings();

        document.querySelector(DOM.addButton).addEventListener("click", function () {
            ctrlAddStudent();
        });

    }

    function ctrlAddStudent () {
        var input = UICtrl.getInput();

        if (!input.fullname || !input.grade || !input.subject) {
            // throw new Error ('Error');
            UICtrl.displayError(input);
            return;
        }

        var student = dataCtrl.addStudent(input.subject, input.fullname, input.grade);

        UICtrl.clearInputFields();




    }

})();