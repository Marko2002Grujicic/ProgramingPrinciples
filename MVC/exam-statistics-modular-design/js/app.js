var moduleApp = (function (subject, student, exam, form){
var addEntry = document.querySelector("#add-entry");

function event() {
    // Collect Data
    var formData = form.collectStudentData();
    console.log(formData);
    // validate Data
   form.validateStudentData(
        formData.subject,
        formData.student,
        formData.newGrade
    );
    form.splitStudentNameSurname(formData.student);
    form.createEntities(
        formData.subject,
        formData.student,
        form.newGrade
    );
    form.increaseIncrement();
    form.checkIfPassedOrFailed();
    form.calcPercentageOfStudentsWhoFailed()
    form.clearErrors(); 
}
addEntry.addEventListener("click", event)
})(moduleSubject, moduleStudent, moduleExam, moduleForm)