/* Task 1: Write a program that gets maximum of two numbers

function getMax (a, b){

    if (!isFinite(a) || !isFinite(b)) return " Invalid input!"
    if (a > b) return a
    if (b > a) return b
    return "Numbers are equal!"
}
console.log(getMax(165, 200)) */

/* Task 2: Write a program that checks if a given number is odd.

function checkOddOrEven (n){
    if (typeof n !== "number"){
        return "Invalid input!";
    }
    if (n % 2 === 0) return "Number is even"
    return "Number is odd"
}

console.log(checkOddOrEven("20"));
*/

/* Task 3: Write a program that checks if a given number is a three digit long number.

function check(n){
    if ( n > 99 && n < 1000) return "The number is a three digit number."
    return "The number isn't three digit number."
}
console.log(check(99)); */

 /* Task 4: Write a program that calculates an arithmetic mean of four numbers.

function arithmetic(n){
    var sum = 0;
    for (var i = 0; i < n.length; i++){
        sum+= n[i];
    }
    return (sum / 4)
}

var n = [1, 2, 3, 4];
console.log(arithmetic(n));  */


/* Task 5: Write a program that draws a square of a given size. For example, if the size of square is 5 the program should draw: 

*****
*   *
*   *
*   *
***** 

 var result ="*****\n*   *\n*   *\n*   *\n*****"; 

 

function drawSquare (dimension) {
    var result = "";

    for (var i = 0; i < dimension; i++) {
        for (var j = 0; j < dimension; j++){
            if (i === 0 || i === dimension - 1 || j === 0 || j === dimension - 1){
            result += "*";
        } else {
            result += " ";
        }
    }
    if (i !== dimension - 1) result += "\n";
    }
    return result;
}

var r = drawSquare(10);
console.log(r);
*/

/* Task 6: Write a program that draws a horizontal chart representing three given values.
For example, if values are 5, 3, and 7, the program should draw:

* * * * *
* * *
* * * * * * *  
function draw (a, b, c) {
    var result = "";

    for (var i = 0; i < a; i++) {            
        result += "*"; }   
    if (i === a) result += "\n";  

    for (var j = 0; j < b; j++) {
        result += "*"; }
    if (j === b) result += "\n";

    for (var k = 0; k < c; k++) {
        result += "*";
    }
            return result
}
console.log(draw(3,5,7)); */

/* Task 7: Write a program that calculates a number of digits of a given number. 

function digits(n){
    var result = 0;                           
    for (var i = 1; i < n; i *= 10){
    if ( n < 10){
        result = 1;
    }
    else result += 1;                     
 }
 return result
   
}
console.log(digits(55555)); */

/* Task 8:  Write a program that calculates a number of appearances of a given number in a given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3 

function countAppearances (arr, e){
    var result = 0;
    for (var i = 0; i < arr.length; i++){
        if (e === arr[i]) result ++;
    }
    return result;
}
console.log(countAppearances([2,4,7,8,7,7,1], 7)); */


/* Task 9: Write a program that calculates the sum of odd elements of a given array.

function sum (arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0) sum += arr[i];
    }
    return sum;
}
console.log(sum([1,2,1,4,1,6,5])); */

/* Task 10 Write a program that calculates the number of appearances of a letter "a" in a given string. Modify the program so it calculates the number of both letters a and A.

function countAppearances (arr){
    var result = 0;
    for (var i= 0; i< arr.length; i++){
    if ("a" === arr[i] || "A" === arr[i]) result++;
}
    return result
}
console.log(countAppearances("BananAs")); */

/* Task 11 Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc.

function concatenates(string, number){
    var result = "";
    for (var i = 0; i < number; i++){
        result += string;
    }
    return result
}
console.log(concatenates("abc", 4)); */