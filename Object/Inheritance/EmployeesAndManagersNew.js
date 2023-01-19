/* Task 1: Create constructor functions with properties representing the following:
 ○ Person: name, surname
 ○ Employee: inherits Person and has job and salary
 ○ Developer: inherits from Employee and has specialization
 ○ Manager: inherits from Employee and has department */

 class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
 }
 

// Employee
/* Task 4: All employees should inherit methods:
○ getData which returns the name, surname and salary
○ getSalary which prints out the salary
○ increaseSalary which increases the salary by 10% */

class Employee extends Person{
    constructor(name,surname,job,salary){
        super(name,surname)
        this.job = job;
        this.salary=salary;
    }
    getDate() {
        console.log(); super.name + " " + super.surname + " " + this.salary;
    }
    getSalary(){
        console.log(this.salary);
    }
    increaseSalary(){
        this.salary += this.salary * 0.10;
    }
}

// Developer

// Task 2: All developers should inherit method: getSpecialization which prints out the name of the specialization

class Developer extends Person{
    constructor (name, surname, job, salary, specialization){
        super(name, surname, job, salary)
        this.specialization = specialization;
    }
    getSpecialization(){
        console.log(this.specialization);
    }
}

// Manager

// Task 3: All managers should inherit methods: a) getDepartment which prints out the name of the department, b) changeDepartment which sets the department value to the given value
// a) getDepartment which prints out the name of the department
// b) changeDepartment which sets the department value to the given value

class Manager extends Person{
    constructor (name, surname, job, salary, department){
        super(name, surname, job, salary)
        this.department = department;
    }
    getDepartment(){
        console.log(this.department);
    }
    changeDepartment(){
        this.department = newDepartment;
    }
}





