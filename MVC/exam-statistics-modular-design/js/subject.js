"use strict"
var moduleSubject = (function () {
    class Subject {
        constructor(subjectName) {
            this.name = subjectName;
        };
        getSubjectName() {
            return this.name;
        };
    };
    return{
        getSubjectName: Subject.getSubjectName
    }
})();
