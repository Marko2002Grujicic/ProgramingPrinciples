"use strict";

/* Task 1. Write a function that checks if a given string contains digit 5.
Input: “1b895abd”
Output: true
Input: “1bser9re”
Output: false  */

function checkIfPresent(string) {
    var check = false;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "5") {
            check = true;
        } 
    }
    return check;
}
console.log(checkIfPresent("1bser9re"));


/* Task 2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!” */

function replaceString(string) {
    var newString = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "J" || string[i] === "S") {
            newString += "*";
        } else {
            newString += string[i] 
        }
    }
    return newString;
}
console.log(replaceString("Programming in JS is super interesting!"));


/* Task 3. Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’ 
Output: “Good morning” */

function insertCharacter(string, character, position) {
    if (!position) {
        position = 1;
    }
    var output = "";
    for (var i = 0; i < string.length; i++) {
        if (i === position - 1) {
            output += character;
        }
        output += string[i]
    }
    return output
}
console.log(insertCharacter("Goo morning", "d", 4));


/* Task 4. Write a function that deletes a character from the given position in the string. 
Input: “Goodd morning!”, 3 
Output: “Good morning!”  */

function deleteCharacter (string, position, cb) {
    var result = "";
    for (var i = 0; i < string.length; i++) {
        if (!cb(i, position)) {
            result += string[i];
        }
    }
    return result;
}
console.log(deleteCharacter("Goodd morning!", 3, function (index, position) {return index === position}));


/* Task 5. Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67] */

function deleteEverySecond(array, cb) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (cb(i)) {
        newArray[newArray.length] = array[i];
        }
    } 
    return newArray;
}

console.log(deleteEverySecond([3, 5, 1, 8, 90, -4, 23, 1, 67], function(e) {return e % 2 === 0}));


/* Task 6. Write a function that replaces the elements of the given array between two positions with their doubled values. 
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67] */

function replaceAndDouble(array, position1, position2, cb) {
    for (var i = 0; i < array.length; i++) {
        if (cb(i, position1, position2)) {
            array[i] = array[i] * 2;
        }
    }
    return array;
}
console.log(replaceAndDouble ([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6, function(e, position1, position2) {return e >= position1 && e <= position2}));


/* Task 7. Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions! 
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true */

function checkIfPresent(array1, array2) {
    var result = true;
    for (var i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) === -1) {
            result = false;
            break;
        }
    }
    return result;
}
console.log(checkIfPresent([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));


/* Task 8. Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’] */


  



/* Task 9. Write a function that prints out the date of the next day. 
Output:  25. 10. 2018. */

function printNextDate(day, month, year) {
    var nextDay = day + 1, nextMonth = month, nextYear = year;
    if (day === 31) {
        if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
            nextDay = 1;
            nextMonth = month + 1;
        }
    }
    if (day === 30) {
        if (month === 2 || month === 4 || month === 6 || month === 9 || month === 11) {
            nextDay = 1;
            nextMonth = month + 1;
        }
    }
    if (month === 12 && day === 31) {
        nextYear = year + 1;
        nextDay = 1;
        nextMonth = 1;
    }
    if (month === 2 && day === 28) {
        nextMonth = 3;
        nextDay = 1;
    }
    return (nextDay + "." + nextMonth + "." + nextYear)
}
console.log(printNextDate(24, 10, 2018));


/* Task 10. Write a function that prints out the date of the previous day. 
Output:  23. 10. 2018. */

function printPreviousDate(day, month, year) {
    var lastDay = day - 1, lastMonth = month, lastYear = year;
    if (day === 1) {
        if (month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
            lastDay = 30;
            lastMonth = month - 1;
        }
        if (month === 1 || month === 2 || month === 4 || month === 6 || month === 9 || month === 11) {
            lastDay = 31;
            lastMonth = month - 1;
        }
    }
    if (month === 1 && day === 1) {
        lastYear = year - 1;
        lastDay = 31;
        lastMonth = 12;
    }
    return (lastDay + "." + lastMonth + "." + lastYear)
}
console.log(printPreviousDate(24, 10, 2018));


/* Task 11. Write a function that prints out an array of the numbers aligned from the right side.
Input: [78, 111, 4, 4321]
Output: 
    78
    111  
    4
    4321
*/
function printAlignedRight(array) {
    var output = [];
    for (var i = 0; i < array.length; i++) {
        output += "\t" + array[i] + "\n";
    }
    return output
}
console.log(printAlignedRight([78, 111, 4, 4321])) 