/* Task 1: Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1] */

function duplicate (array){
    var arrayDuplicated = array.concat(array);
    return arrayDuplicated;
}
var a = [2,4,7,11,-2,1];
console.log(duplicate(a));

/* Task 2: Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] */

var a = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var removeDuplicates = a.filter((c,index) => {
    return a.indexOf(c) === index;
});
console.log(removeDuplicates);

/* Task 3: 
a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true */
var a = [1, 2, 9, 2, 1];
function checkIfOdd (array){
    if (array % 2 != 0){
        return "true";
    }
}
console.log(checkIfOdd(a));

/* b. Write a function that counts the number of elements less than the middle
element. If the given array has an even number of elements, print out an error
message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4*/
