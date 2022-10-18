var result = '';
var a = 1;

// duzi nacin:
// if (a > 0) {
// result = a + ' is positive number';
// } else{
//   result = a + ' is negative number or zero';
// }

// kraci nacin "Ternary":

result = a > 0 ? a + ' is positive number' : a + 'is negative number or zero';

//Write a program that compares two numbers and displays the larger. Result should be displayed in the console.

var a = 4;
var b = 6;

if (a > b){
    console (a)
} else if (b > a) {
    console.log(b)
}

// Write a program to check if the number is divisible by 2. if it is, print even, if not, print odd.
// Sample numbers: 3, 4, 9 ( check one a t the time)
//Output: odd, even, odd

var number = 9;
var result = '';

// duzi nacin:
// if (number % 2 === 0) {
    // result = 'even';
// } else { 
// } result = 'odd';
// }
var result = (number % 2 ===0) ? 'even': 'odd';

//Write a program to check if the number is divisible by 3 and 5 . If it is, print that number.
// Sample numbers: 15, 12 (check one at the time)
// Output: 15

var number1 = 15;
var number2 = 12;
 if ( number1 % 3 === 0 && number1 % 5 === 0){
    console.log(number1)
}
if ( number2 % 3 === 0 && number2 % 5 === 0){
    console.log(number2)
}

// Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
// Sample numbers: 3, -7, 2
// Output: The sign is -

var number3 = 3;
var number4 = -7;
var number5 = 2;
var result = '';
var product = number3 * number4 * number5;
 if ( product > 0) {
    result =  product + ' the sign is +' ;
 } else {
    result = product + ' the sign is -'  ;
}
console.log(result)

// Write a program to check if the variable is a number. If it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”
// Sample numbers: 10 | 7 (check one at the time)
// Output: 10 / 2 = 5 | X

var c = 10;
var d = 7;
var check = '';

if ( typeof c == 'number' && c % 2 == 0) {
        console.log(c)
} else {
    check = check + 'X';
    console.log(check)
}

if ( typeof d == 'number' && d % 2 == 0) {
    console.log(d)
} else {
    check = check + 'X';
    console.log(check) 
}

//Write a conditional statement to find the largest of five numbers. Display the result in console.
// Sample numbers: -5, -2, -6, 0, -1
// Output: 0

var e = -5;
var f = -2;
var g = -6;
var h = 0;
var i = -1;

if ( e > f && e > g && e > h && e > i){
    console.log(e)
}
if ( f > e && f > g && f > h && f > i){
    console.log(f)
}
if ( g > e && g > f && g > h && g > i){
    console.log(g)
}
if ( h > e && h > f && h > g && h > i){
    console.log(h)
}
if ( i > e && i > f && i > g && i > h){
    console.log(i)
}

// Write a conditional statement to sort three numbers.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

var x= 0;
var y= -1;
var z= 4;
if (x > y && x > z)
{
        if (y > z)
        {
            console.log(x + ", " + y + ", " +z);
        } else
        {
            console.log(x + ", " + z + ", " +y);
        }
} 
else if (y > x && y > z)
{
        if (x > z)
        {
             console.log(y + ", " + x + ", " +z);
        } 
        else 
        {
             console.log(y + ", " + z + ", " +x);
        }
} 
else if (z > x && z > y)
{
        if (x > y){
            console.log(z + ", " + x + ", " +y);
        } 
        else 
        {     
            console.log(z + ", " + y + ", " +x);
        }
}
