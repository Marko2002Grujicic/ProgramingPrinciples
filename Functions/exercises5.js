/* Task 1. Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ] */

function switchMinMax(array) {
    var min = array[0], max = array[0], newarray = [];
        for (var i = 0; i < array.length; i++) {
            if (min > array[i]) {
                min = array[i]
            } 
            if (max < array[i]) {
                max = array[i]
            }
            var e = array[i];
            if (array[i] === max) {
                e = max
            }
            if (array[i] === min) {
                e = min
            }
            newarray[newarray.length] = e
        }
        return newarray
} 
console.log(switchMinMax([ 3, 500, 12, 149, 53, 414, 1, 19 ]))


/* Task 2. Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ] */

function arrayManipulation(array1) {
    var array2 = [];
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] <= 0) {
            array2[array2.length] = 20
        } else {
            array2[array2.length] = array1[i] / 2 + 5;
        }
    }
   return array2
}
console.log(arrayManipulation([ 3, 500, -10, 149, 53, 414, 1, 19 ]))


/* Task 3. Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.  */

function grades(names,points) {
  var output = "";

  for (var i = 0; i < points.length; i++) {
    if (points[i] <= 50) {
        var result = "Failed"
    }
    if (points[i] > 50 && points[i] <= 60) {
        result = 6
    }
    if (points[i] > 60 && points[i] <= 70) {
        result = 7
    }
    if (points[i] > 70 && points[i] <= 80){
        result = 8
    }
    if (points[i] > 80 && points[i] <= 90) {
        result = 9
    }
    if (points[i] <= 100 && points[i] > 90) {
        result = 10
    }
    output += names[i] + " " + result + "\n";
  }
  return output
}

console.log(grades([ "Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]))


// instructions say that tasks 4. and 5. should be skipped


/* Task 6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000  */

function loopMath() {
    var even = 0, odd = 0;
    for (var i = 0, j = 500; i <= 1000; i += 2, j--) {
        even += i;
        if (j % 2 === 1) {
            odd += j
        }
    }   
    var result = (even - odd) * 12.5;
    return result
}
console.log(loopMath())


/* Task 7. Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
Output: AnStJoJoDaMa  */

function manipulateArray(array) {
    var output = "";

    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] !== "number" && array[i].length > 2) {
        var part = array[i][0] + array[i][1];
        output += part;
      }
    }
    return output
  }
console.log(manipulateArray([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]))


/* Task 8. Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB  */

function reverseString(string) {
    var output = "";
    for (var i = string.length - 1; i >= 0; i--) {
        output += string[i]
    }
    return output
}
console.log(reverseString("Belgrade Institute of Technology"))


/* Task 9. Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).  */

function numberCombination() {
    var output = "";
    for (var i = 1; i <= 7; i++) {
      for (var j = 1; j <= 7; j++) {
        if (i !== j) {
          output += "(" + i + ", " + j + ")" + " ";
        }
      }
    }
    return output
  }
  console.log(numberCombination())


/* Task 10. Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false  */

function checkIfPrime(n) {
    var prime = true;
    var divider = 2;
    while ( divider < n ) {
        if (n % divider === 0)  {
            prime = false
            }
        divider = divider + 1
    }
    return prime
}

console.log(checkIfPrime(17))


/* Task 11. Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true */

function symmetryCheck (string) {
    var result = true;
    for (var i = 0, j = string.length - 1; i <= j; i++, j--) {
      if (string[i] !== string[j]) {
        result = false;
        break
        }
    } 
    return result
}
console.log(symmetryCheck("geek"))


/* Task 12. Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9   
*/

function greatestDivisor(a, b) {
    var output = 0;
    var length = a >= b ? b : a;
    for (var i = 1; i <= length; i++) {
        if (a % i === 0 && b % i === 0) {
            output = i
    }
}
return output
}
console.log(greatestDivisor(192, 42))