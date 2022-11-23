/* Task 1. Write a function that converts an array of strings into an array of numbers. Filter
out all non-numeric values.
Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]  */

function arrayConvert(array) {
    var output = [];

    for (var i = 0; i < array.length; i++) {
      var e = parseFloat(array[i]);
      if (isFinite(e)) {
        output[output.length] = e
      }
    }
    return output
}
console.log(arrayConvert(["1", "21", undefined, "42", "1e+3", Infinity]))


/* Task 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: “015false-2247”  */

function joinToString(array) {
    var output = "";

    for (var i = 0; i < array.length; i++) {
        if (isFinite(array[i]) === true && array[i] !== null) {
          output += array[i]
        }
    }
  return output
}
console.log(joinToString([NaN, 0, 15, false, -22, "", undefined, 47, null]));


/* Task 3. Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]   */

function filterFalsyOut(array) {
    var output = [];

    for (var i = 0; i < array.length; i++) {
        if (!!array[i]) {
          output[output.length] = array[i]
        }
    }
  return output
}
console.log(filterFalsyOut([NaN, 0, 15, false, -22, '', undefined, 47, null]))


/* Task 4. Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3 */

function countIntegers(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
      if (parseInt(array[i]) === array[i]) {
        output[output.length] = array[i]
      } 
  }
  return output.length
}
console.log(countIntegers([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]))


/* Task 5. Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2 */

function countFloats(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
      if (typeof array[i] === "number" && array[i] !== parseInt(array[i]) && isNaN(array[i]) === false) {
        output[output.length] = array[i]
      } 
  }
  return output.length
}
console.log(countFloats([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]))
