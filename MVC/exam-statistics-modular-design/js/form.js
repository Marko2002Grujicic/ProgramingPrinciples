"use strict"
var moduleForm = (function(){
// initialize variables for tracking statistics
var studentCount = 0;
var passedCount = 0;
var failedCount = 0;

// get form elements
var chooseSubject = document.querySelector("#subjects");
var addStudent = document.querySelector("#name");
var addEntry = document.querySelector("#add-entry");
var entryError = document.querySelector("#entry-error");
var chooseGrade = document.querySelector("#grades");

// get elements for displaying statistics
var totalStudentCount = document.querySelector("#count");
var passedCountSpan = document.querySelector("#passed-count");
var failedCountSpan = document.querySelector("#failed-count");
var percentageFailed = document.querySelector("#percentage-failed");

// get elements for displaying passed and failed lists
var passedList = document.querySelector("#passed-list");
var failedList = document.querySelector("#failed-list");

// Collect student data
function collectStudentData() {
    var subject = chooseSubject.value;
    var student = addStudent.value;
    var newGrade = parseFloat(chooseGrade.value);
    return{
        subject: subject,
        student: student,
        newGrade: newGrade
    }
}
// validate error
function validateStudentData(subject, student, newGrade){
if (!subject){
    return entryError.textContent = "Please select a subject." 
}
if (!student || !isNaN(student)) {
    entryError.textContent = "Invalid student name input.";
    return;
};
var space = new RegExp(/\s/);
if (!space.test(student)) {
    entryError.textContent = "Please separate name and surname.";
    return;
};
if (!newGrade) {
    entryError.textContent = "Please select a grade.";
    return;
};}
// split student name and surname
function splitStudentNameSurname(student){
    var student_name = student.split(" ");
    console.log(student_name);
    var initialName = student_name[0];
    var initialSurname = student_name[1];
    
    var name = initialName[0].toUpperCase() + initialName.slice(1);
    var surname = initialSurname[0].toUpperCase() + initialSurname.slice(1);
    return{
        name: name, 
        surname: surname
    }
}

// create entities
function createEntities (subject, name, surname, newGrade){
    var newSubject = new Subject(subject);
    var newStudent = new Student(name, surname);
    var newExam = new Exam(newSubject, newStudent, newGrade);
    var newItem = document.createElement("li");
    newItem.textContent = newExam.getExamInfo();
    // create new list item for each added entry
    return{
        newSubject: newSubject, 
        newStudent: newStudent, 
        newExam: newExam,
        newItem: newItem
    }
}
// increment student count
function increaseIncrement(){
    studentCount++
    totalStudentCount.textContent = studentCount;
}
// check if student passed or failed 
function checkIfPassedOrFailed(){
    if (newExam.hasPassed()) {
        passedCount++;
        passedCountSpan.textContent = passedCount;
        var gradePspan = document.createElement("span");
        gradePspan.setAttribute("id", "grade-passed");
        gradePspan.textContent = newGrade;
        passedList.appendChild(newItem);
        newItem.appendChild(gradePspan);  
    } else {
        failedCount++;
        failedCountSpan.textContent = failedCount;
        var gradeFspan = document.createElement("span");
        gradeFspan.setAttribute("id", "grade-failed");
        gradeFspan.textContent = newGrade;
        failedList.appendChild(newItem);
        newItem.appendChild(gradeFspan); 
    }; return {
        passedCount: passedCount,
    }
}

// calculate percentage of students who failed
function calcPercentageOfStudentsWhoFailed(){
    if (failedCount === 0){
        failedCountSpan.textContent = "0";
            percentageFailed.textContent = "0%";
        } else {
            var percentage = (failedCount / studentCount) * 100;
            percentageFailed.textContent = percentage.toFixed(0) + "%";
    }
}
// clear errors
function clearErrors() {
    entryError.textContent = "";
    chooseSubject.value = "";
    addStudent.value = "";
    chooseGrade.value = "";
}

return{
    collectStudentData: collectStudentData,
    validateStudentData: validateStudentData,
    clearErrors: clearErrors,
    splitStudentNameSurname: splitStudentNameSurname,
    createEntities: createEntities,
    increaseIncrement: increaseIncrement,
    checkIfPassedOrFailed: checkIfPassedOrFailed,
    calcPercentageOfStudentsWhoFailed: calcPercentageOfStudentsWhoFailed


}
})();