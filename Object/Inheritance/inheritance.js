
// OLd way
function Person (name, surname){
    this.name = name;
    this.surname = surname;
}

Person.prototype.fullName = function() {
    return this.name + " " + this.surname;
}

Person.prototype.printInfo = function() {
    console.log(this.fullName());
}

var pera = new Person("Pera", "Peric");

console.log(pera);

// New Way

class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    fullName(){
        return this.name + " " + this.surname;
    }

    printInfo(){
        console.log(this.fullName());
    }
 }
 


// Inheritance

// Old way:

// Step 1: We would like Programmer to inherit properties from Person
function Programmer(name, surname, favoriteLanguage) {
    Person.call(this, name, surname);
    this.favoriteLanguage = favoriteLanguage;
}

// Step 2: We create the object with Person prototype
Programmer.prototype = Object.create(Person.prototype);

// Step 3: Overwrite constructor property of inherited prototype
Programmer.prototype.constructor = Programmer;

Programmer.prototype.printInfo = function() {
    console.log(
        this.fullName() + ", favorite language: " + this.favoriteLanguage
    );
};
console.log(Programmer.prototype);
console.log(Person.prototype);



// New way Combines all 3 steps from the Old way:


class Programmer extends Person {
    constructor (name,surname,favoriteLanguage){
        super(name, surname)
        this.favoriteLanguage = favoriteLanguage;
    }
    printInfo () {
        console.log(
            super.fullName() + " , favorite language: " + this.favoriteLanguage
        );
    }
}


var programmerPera = new Programmer("Pera", "Peric", "JS");
console.log(programmerPera);
programmerPera.printInfo();
console.log(programmerPera.constructor);