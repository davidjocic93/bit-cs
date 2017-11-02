const dataController = (() => {

    let data = {
        students: [],
        studentsPassed: [],
        studentsFailed: [],
        totalNumOfStudents: 0
    }

    class Student {
        constructor(fullname, grade, subject) {
            this.fullname = fullname;
            this.grade = grade;
            this.subject = subject;
        }

        getInfo() {
            return `Student: ${this.fullname}. Grade: ${this.grade}. Subject: ${this.subject}`;
        }

    }

return {

    addStudent(fullname, grade, subject) {
        const student = new Student(fullname, grade, subject);

        data.students.push(student);

        if (grade == 5) {
            data.studentsFailed.push(student);
        } else {
            data.studentsPassed.push(student);
        }

        return student;
    },

    calculateNumOfStudents() {
        const numOfStudents = data.students.length;
        return numOfStudents;
    },

    calculateNumOfStudentsPassed() {
        const numOfStudentsPassed = data.studentsPassed.length;
        return numOfStudentsPassed;
    },

    calculateNumOfStudentsFailed() {
        const numOfStudentsFailed = data.studentsFailed.length;
        return numOfStudentsFailed;
    },

    calculatePercentagePassed() {
        const percentagePassed = (data.studentsPassed.length / data.students.length) * 100;
        return percentagePassed;
    },

    calculatePercentageFailed() {
        const percentageFailed = (data.studentsFailed.length / data.students.length) * 100;
        return percentageFailed;
    },

    calculateMonth() {
        const date = new Date();
        const month = date.getMonth();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let currentMonth = monthNames[month];
        return currentMonth;
    }
}

})();

const UIController = ( () => {


    const DOMStrings = {

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

    return {
        

    getDOMStrnings() {
        return DOMStrings;
    },

    getInput() {

        let nameElement = document.querySelector(DOMStrings.inputName);
        let gradeElement = document.querySelector(DOMStrings.inputGrade);
        let subjectSelectElement = document.querySelector(DOMStrings.selectSubject);
        let subjectOptionElement = subjectSelectElement[subjectSelectElement.selectedIndex];


        const result = {
            fullname: nameElement.value,
            grade: gradeElement.value,
            subject: subjectOptionElement.value
        }

        return result;
    },

    displayError(input) {

        if (!input.subject) {
            alert("Please select subject!");
        } else if (!input.fullname) {
            alert("Please submit your name!");
        } else if (!input.grade) {
            alert("Please select grade!");
        }
    },

    clearInputFields() {

        let nameElement = document.querySelector(DOMStrings.inputName);
        let gradeElement = document.querySelector(DOMStrings.inputGrade);
        let subjectSelectElement = document.querySelector(DOMStrings.selectSubject);

        subjectSelectElement.selectedIndex = 0;
        nameElement.value = "";
        gradeElement.value = "";

    },

    displayStudent(student) {

        let passedList = document.querySelector(DOMStrings.passedListElement);
        let failedList = document.querySelector(DOMStrings.failedListElement);
        let htmlItem = "<li>" + student.getInfo() + "</li>"

        if (student.grade == 5) {
            failedList.insertAdjacentHTML("beforeend", htmlItem);
        } else {
            passedList.insertAdjacentHTML("beforeend", htmlItem);
        }
    },

    displayNumOfStudents(numOfStudents) {
        document.querySelector(DOMStrings.containerNumOfStudents).textContent = numOfStudents;
    },

    displayNumOfStudentsPassed(numOfStudentsPassed) {
        document.querySelector(DOMStrings.containerNumOfStudentsPassed).textContent = numOfStudentsPassed;
    },

    displayNumOfStudentsFailed(numOfStudentsFailed) {
        document.querySelector(DOMStrings.containerNumOfStudentsFailed).textContent = numOfStudentsFailed;
    },

    displayPercentagePassed(percentagePassed) {
        document.querySelector(DOMStrings.containerPercentagePassed).textContent = percentagePassed.toFixed(2) + "%";
    },

    displayPercentageFailed(percentageFailed) {
        document.querySelector(DOMStrings.containerPercentageFailed).textContent = percentageFailed.toFixed(2) + "%";
    },

    displayMonth(currentMonth) {
        document.querySelector(DOMStrings.containerMonth).textContent = currentMonth;
    }
    }

})();

const mainController = ((dataCtrl, UICtrl) => {



    let DOM = UICtrl.getDOMStrnings();

    document.querySelector(DOM.addButton).addEventListener("click", () => {
        ctrlAddStudent();
    });

    function ctrlShowNumOfStudents() {

        const numOfStudents = dataCtrl.calculateNumOfStudents();

        UICtrl.displayNumOfStudents(numOfStudents);
    }

    function ctrlShowNumOfStudentsPassed() {

        const numOfStudentsPassed = dataCtrl.calculateNumOfStudentsPassed();

        UICtrl.displayNumOfStudentsPassed(numOfStudentsPassed);
    }

    function ctrlShowNumOfStudentsFailed() {

        const numOfStudentsFailed = dataCtrl.calculateNumOfStudentsFailed();

        UICtrl.displayNumOfStudentsFailed(numOfStudentsFailed);
    }

    function ctrlShowPercentagePassed() {
        const percentagePassed = dataCtrl.calculatePercentagePassed();
        UICtrl.displayPercentagePassed(percentagePassed);
    }

    function ctrlShowPercentageFailed() {
        const percentageFailed = dataCtrl.calculatePercentageFailed();
        UICtrl.displayPercentageFailed(percentageFailed);
    }

    function ctrlShowMonth() {
        const currentMonth = dataCtrl.calculateMonth();
        UICtrl.displayMonth(currentMonth);
    }

    ctrlShowMonth();



    function ctrlAddStudent() {

        let {fullname, grade, subject} = UICtrl.getInput();

        if (!fullname || !grade || !subject) {
            let input = {fullname, grade, subject};
            UICtrl.displayError(input);
            return;
        }

        let student = dataCtrl.addStudent(fullname, grade, subject);


        UICtrl.clearInputFields();

        UIController.displayStudent(student);

        ctrlShowNumOfStudents();

        ctrlShowNumOfStudentsPassed();

        ctrlShowNumOfStudentsFailed();

        ctrlShowPercentagePassed();

        ctrlShowPercentageFailed();
    }

})(dataController, UIController);