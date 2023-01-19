/* Task 1: Create constructor functions with properties representing the following:
 ○ Person: name, surname
 ○ Employee: inherits Person and has job and salary
 ○ Developer: inherits from Employee and has specialization
 ○ Manager: inherits from Employee and has department */

function Person (name, surname){
    this.name = name;
    this.surname = surname
}

// Employee
function Employee(name, surname, job, salary){
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

/* Task 4: All employees should inherit methods:
○ getData which returns the name, surname and salary
○ getSalary which prints out the salary
○ increaseSalary which increases the salary by 10% */

Employee.prototype.getData = function(){
    return this.name + " " + this.surname + " " + this.salary;
}
Employee.prototype.getSalary = function(){
    console.log(this.salary);
}
Employee.prototype.increaseSalary = function(){
    this.salary += this.salary * 0.10;
}

// Developer
function Developer (name, surname, job, salary, specialization){
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;


// Task 2: All developers should inherit method: getSpecialization which prints out the name of the specialization

Developer.prototype.getSpecialization = function(){
    console.log(this.specialization);
}

// Manager
function Manager(name, surname, job, salary, department){
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

// Task 3: All managers should inherit methods: a) getDepartment which prints out the name of the department, b) changeDepartment which sets the department value to the given value

// a) getDepartment which prints out the name of the departmen
Manager.prototype.getDepartment = function(){
    console.log(this.department);
}

// b) changeDepartment which sets the department value to the given value
Manager.prototype.changeDepartment = function(newDepartment){
    this.department = newDepartment;
}




