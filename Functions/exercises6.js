"use strict";

/* Task 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
E, I, O, and U. */

function countVowels(string) {
    var result = 0, i = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u" || string[i] === "A" || string[i] === "E" || string[i] === "I" || string[i] === "O" || string[i] === "U") {
            result++;
        }
    }
    return result;
}
console.log(countVowels("Jamaica"))


/* Task 2. Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]  */

function alternateElements(array1, array2) {
    var output = [], i, j;
    for (i = 0, j = 0; i < array1.length, j < array2.length; i++, j++) {
        output += array[i] + array2[i];
    }
    return output;
}
console.log(alternateElements(["a","b","c"], [1,2,3]))


/* Task 3. Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2] */

function listRotate(array, k) {
    var output = [], i, j;
    for (i = k, j = k - array.length; i < array.length + k; i++, j++) {
        if (array[i] !== undefined) {
            output[output.length] = array[i];
        } else {
            output[output.length] = array[j];
        }
    }    
    return output;
} 
console.log(listRotate([1, 2, 3, 4, 5, 6], 4))


/* Task 4. Write a function that takes a number and returns array of its digits. */

function digits(n) {
    var z = "" + n, output = [], u = 0;
    for (var i = 0; i < z.length; i++) {
        u = parseFloat(z[i])
        output[output.length] = u;
    }
    return output;
}
console.log(digits(011444333))


// Task 5. Write a program that prints a multiplication table for numbers up to 12. 

function multiply12(n) {
    var result = 1, output = "", i, j;
    if (n <= 12) {
        for (i = 1; i <= n; i++) {
            for (j = 1; j <= n; j++) {
            result = i * j;
            output += result + " ";
            }
        }
    }
    return output;
}
console.log(multiply12(7))


// Task 6. Write a function to input temperature in Centigrade and convert to Fahrenheit.

function convertCToF(temp) {
    var output = "", result = 0;
    result = (temp * 9/5) + 32;
    output = temp + " degrees C equals to " + result + " degrees F";
    return output;
}
console.log(convertCToF(23))


// Task 7. Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

function findMax(array) {
    var max = array[0], i = 0;
    for (i = 0; i < array.length; i++) {
        if (isFinite(array[i])) {
            if (max < array[i]) {
                max = array[i]
            }
        }
    }
    return max;
}
console.log(findMax([3, 7, 90, 126, 37, "r", "Greece"]))


/* Task 8. Write a function to find the maximum and minimum elements. Function returns an array. */

function findMinMax(array) {
    var i, min = 0, max = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[0] > array[1]) {
            max = array[0];
            min = array[1];
        } else {
            max = array[1];
            min = array[0];
        }
 
        for (i = 2; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            } else if (array[i] < min) {
                min = array[i];
            }
        }
        
    }
    return [min, max];
}
console.log(findMinMax([8, 6, 11, 23, 48, 17]))



/* Task 9. Write a function to find the median element of array. */

function findMedian(array) {
    var i, j, result;
    for (i = 0, j = array.length - 1; i <= j; i++, j--) {
        result = (array[i] + array[j]) / 2;
    }
    return result;
}
console.log(findMedian([66, 33, 22, 11, 44, 55]))


// Task 10. Write a function to find the element that occurs most frequently. 

function mostFrequent(array) {
    var i = 0, j = 0, element = 0, mostFrequent = 0, result = 0;
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                element++
            }
            if (mostFrequent < element) {
                mostFrequent = element;
                result = array[i];
            }
        }
    }
    return result;
}

console.log(mostFrequent([1, 7, 9, 1, 7, 3, 7]))


/* Task 11. Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned. */

function returnElements(array) {
    var i, j, newarray = [array[0]];
    if (array.length === 0) {
        return array;
    }
    if (array.length % 2 === 0) {
        newarray[1] = array[array.length - 1];
    }
    for (i = 1, j = array.length -2; i <= j; i++, j--) {
        if (array[i] !== array[j]) continue;
        newarray[newarray.length] = array[i];
        newarray[newarray.length] = array[array.length - 1];
    }
    return newarray
}
console.log(returnElements([14, 18, 22, 26, 30]))


/* Task 12. Write a function to find the average of N elements. Make the function flexible to receive
dynamic number or parameters. */

function average(array) {
    var i, sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
console.log(average([14, 36, 18, 24]))


// Task 13. Write a function to find all the numbers greater than the average.

function greaterThanAvg(array) {
    var i, sum = 0, average, newarray = [];
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    for (i = 0; i < array.length; i++) {
        average = sum / array.length;
        if (array[i] > average) {
            newarray[newarray.length] = array[i];        
        }
    }
    return newarray;
}
console.log(greaterThanAvg([7, 13, 18, 24, 25, 30]))


/* Task 14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
square of the height (in meters). Write a function that takes two parameters, weight and
height, computes the BMI, and prints the corresponding BMI category:
● Starvation: less than 15
● Anorexic: less than 17.5
● Underweight: less than 18.5
● Ideal: greater than or equal to 18.5 but less than 25
● Overweight: greater than or equal to 25 but less than 30
● Obese: greater than or equal to 30 but less than 40
● Morbidly obese: greater than or equal to 40 */

function BMI(weight, height) {
    var result, output;
    result = weight / (height * height);
    if (result < 15) {
        output = "Starvation"
    }
    if (result < 17.5) {
        output = "Anorexic"
    }
    if (result < 18.5) {
        output = "Underweight"
    }
    if (result >= 18.5 && result < 25){
        output = "Ideal"
    }
    if (result >= 25 && result < 30) {
        output = "Overweight"
    }
    if (result >= 30 && result < 40) {
        output = "Obese"
    }
    if (result >= 40) {
        output = "Morbidly obese"
    }
    return output
}
console.log(BMI(60, 1.72))


/* Task 15. Write a function that takes a list of strings and prints them, one per line, in a rectangular
frame.:
For example the list ["Hello", "World", "in", "a", "frame"] gets
printed as:
*********
* Hello *
* World *
* in *
* a *
* frame *
*********
*/

var convert = function(array) {
    var i, counter = 0, newarray = [], testarray = [];
    newarray[0] = "";
    for (i = 0; i < array.length; i++) {
      if (array[i] === " " || array[i] === ",") {
        counter++;
        newarray[counter] = "";
      } else {
        newarray[counter] += array[i];
      }
    }
    for (i = 0; i < newarray.length; i++) {
      if (newarray[i] === "") continue;
      testarray[testarray.length] = newarray[i];
    }
    return testarray;
}
  
var generate = function (text) {
    var i, side = "* ";
    for (i = 0; i < text; i++) {
      side += "*";
    }
    side += " *\n";
    return side
}
  
var frameText = function (string) {
  var i, j, length, text, word = "* ", element;
    text = typeof string === "string" ? convertStringToArr(string) : string;
    length = text.length - 1;
   
    var line = generate(text.length);
        for (i = 0; i < text.length; i++) {
            for (j = 0; j < text.length; j++) {
                element = typeof text[i][j] === "undefined" ?  " " : text[i][j];
                word += element;
                if (j === length) {
                    word += " *\n";
                    if (i === length && j === length) {
                        word += "";
                    } else {
                        word += "* ";
                    }
                }
            }
        }
    return line + word + line;
}

console.log(frameText(["Hello", "World", "in", "a", "frame"]))