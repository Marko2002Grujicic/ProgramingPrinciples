const user = {
    name: "Marko",
    lastName: "Grujicic",
    sayHello: function(greeting){
      // OLD WAY:  
      // return greeting + " " + this.name + " " + this.lastName + "!";

      // New Way: JS is being typed in {} brackets with a $ in front.
        return `${greeting} ${this.name} ${this.lastName}!`
    }
}
console.log(user.sayHello("Pozdrav"));

let stringTemplate = `
<div>
    Ime:
    ${user.name}
    Prezime:
    ${user.lastName}
</div>
`;
console.log(stringTemplate);

