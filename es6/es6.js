const a = [1,2,3,4,5];

a.push(6);

const b = a.map(function (el) {
    return el + 1;
});

console.log(a);
console.log(b);

// let declares variable like var, but with block scope

// const doesn't allow declared variable to be changed