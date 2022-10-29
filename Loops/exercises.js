/* Example: Write a program that will iterate from 0 to 10 and display squares of numbers.

 for (var x = 0; x <= 10; x++){
    console.log(x * x);
 }*/

 /* Task 1: Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.


var x = 0;
var result = '';
for (x; x <= 15; x++){
    if (x % 2 === 0 ) {
        console.log(x, "The number is even");
    } else {
        console.log(x, "The number is odd");
    }
} */

/* Task 2:  Write a program to sum the multiples of 3 and 5 under 1000.

var sum = 0;
for (var x = 0; x < 1000; x++){
   if(x % 3 === 0 && x % 5 === 0){
    sum+= x;
   }
    }
console.log(sum);
*/

/*Task 3: Write a program to compute the sum and product of an array of integers.

var result = 0;
var a =[1, 2, 3, 4, 5], sum = 0,  product = 1;
for (var i = 0; i < a.length; i++){
    sum+= a[i];             //sum = sum + a[i];    
    product*= a[i];         //product = product * a[i];               
}
console.log("Sum = "+sum + ", Product = "+product);
*/

/* Task 4: Write a program which prints the elements of the following array as a single string.

var a = ["1", "A", 'B', "c", "r", true, NaN, undefined];
var result = "";
for (var i = 0; i < a.length; i++) {
    result+= a[i];
}
console.log(result); */

/* Task 5: Write a program that prints the elements of the following array.

var a = [
         [1, 2, 1, 24],
         [8, 11, 9, 4],
         [7, 0, 7, 27]
], result = "";

for (var i = 0; i < a.length; i++) {
    for ( var j = 0; j < a[i].length; j++){
       result+= a[i][j]+ " ";
    }
    console.log(result);
    result = "";
}*/

/* Task 6: Write a program that outpust the sum of squares of the first 20 numbers.

var x = 0, sum=0;
do {
    sum+= x*x;
    x++;
} while (x < 20);
console.log(sum); */

/* Task 7: Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade.

var students =[["David", 80],["Marko", 77],["Dany", 77],["John", 95], ["Thomas", 68]];
var avggrade = 0;
for (var i = 0; i < students.length; i++){
    avggrade += students [i][1];
    var avg = (avggrade/students.length);
}
console.log("Average grade: " + avg);
if (avg < 60){
    console.log("Grade: F");
} 
else if (avg < 70){
    console.log("Grade: D");
} 
else if (avg < 80){
console.log("Grade: C");
}
else if (avg < 90){
    console.log("Grade: B");
} 
else if (avg < 100){
    console.log("Grade: A");
}
*/
/* Task 8: Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print &"Fizz" or "Buzz" for numbers divisible by only one of those).

for (var x = 1; x < 100; x++){
    if (x % 3 === 0 && x % 5 === 0){
        console.log("FizzBuzz")
    }
    else if (x % 5 === 0){
        console.log("Buzz")
    }
    else if(x % 3===0){
        console.log("Fizz")
    }
    else{
        console.log(x)
    }
}   */