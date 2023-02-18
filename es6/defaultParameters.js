function sum(a = 10, b = 10){ //New way to filer is to add them in initial parameters.
   /* a = a || 0;   Old way to : Filter parameters to see if it is a truthy value 
    b = b || 0; */
    return a + b;
}
console.log(sum(10,5));


const firstName = "Marko";
const id = 33;

const user = {
    firstName,
    id,
    sayHello(){
        return `Hello ${this.firstName}!`
    }
}

console.log(user.sayHello());

// map vs filter

const originalArray = [1,2,3,4,5,6,7,8,9];

const filteredArray = originalArray.some(function (number){
   return typeof number === 'number';
})
console.log(filteredArray);