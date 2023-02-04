"use strict"
var moduleExam = (function (){
    
    class Exam {
        constructor(subjectName, studentName, grade) {
            if (!(subjectName instanceof Subject)) {
                throw new Error("Invalid subject input");
            };
            if (!(studentName instanceof Student)) {
                throw new Error("Invalid student input");
            };
            this.subjectName = subjectName;
            this.studentName = studentName;
            this.grade = grade;
        };
    
        getExamInfo() {
            return this.subjectName.getSubjectName() + " - " + this.studentName.getStudentData();
        };
    
        hasPassed() {
            if (this.grade > 5) {
                return true;
            } else {
                return false;
            };
        };
    };
    return{
        getExamInfo: getExamInfo,
        hasPassed: hasPassed
    }
})();
