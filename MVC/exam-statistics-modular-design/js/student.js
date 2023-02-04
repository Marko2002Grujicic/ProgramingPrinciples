"use strict"
var moduleStudent = (function (){
    class Student {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        };
    
        getStudentData() {
            var firstName = this.name[0].toUpperCase() + this.name.slice(1);
            var lastName = this.surname[0].toUpperCase() + this.surname.slice(1);
            return firstName + " " + lastName;
        };
    };
    return {
        getStudentData: Student.getStudentData
    }
})();

