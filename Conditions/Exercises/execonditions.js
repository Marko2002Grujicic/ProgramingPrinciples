// Task 1. Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
// Sample numbers: 3, -7, 2
// Output: The sign is -

var number1 = 3;
var number2 = -7;
var number3 = 2;
var product = number1 * number2 * number3

if (product >= 0){
    console.log(product + " The sign is +")
} else {
    console.log(product + " The sign is -")
}

// Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
// Sample numbers: -5, -2, -6, 0, -1
// Output: 0

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if ( a > b && a > c && a > d && a > e) {
    console.log(a)
} if ( b > a && b > c && b > d && b > e){
    console.log(b)
} if ( c > a && c > b && c > d && c > e){
    console.log(c)
} if ( d > a && d > b && d > c && d > e){
    console.log(d)
}

// Task 3. Write a conditional statement to print three numbers as sorted number list.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1
var a3 = 0;
var b3 = -1;
var c3 = 4

if ( a3 > b3 && a3 > c3) 
{
    if (b3 > c3) 
    {
        console.log(a3 + ", " + b3 + ", " + c3)
    } 
    else 
    {
        console.log(a3 + ", " + c3 + ", " + b3)
    }
} 
else if ( c3 > a3 && c3 > b3) 
{
     if (a3 > b3)
     {
        console.log(c3 + ", " + a3 + ", " + b3)
     } 
    else {
        console.log(c3 + ", " + b3 + ", " + a3)
    }
}
else if ( b3 > a3 && b3 > c3) {
    if ( a3 > c3){
        console.log(b3 + ", " + a3 + ", " + c3)
        }
    else {
        console.log(b3 + ", " + c3 + ", " + a3)
    }
}

//Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”.
// Sample input: 10             Sample input: 7 
//Output: 10 / 2 = 5            Output: X

var a4 = 10;
var b4 = 7;

if ( typeof a4 == 'number')
{
    if ( a4 % 2 == 0) 
    {
        console.log( a4 / 2)
    }
    else 
    {
        console.log("X")
    }
} 
else 
{
    console.log("X")
}

if ( typeof b4 == 'number')
{
    if ( b4 % 2 == 0) 
    {
        console.log( b4 / 2)
    }
    else 
    {
        console.log("X")
    }
} 
else 
{
    console.log("X")
}

// Task 5. Write a program that compares two numbers and displays the larger. Display the result in the console.
var a5 = 20;
var b5 = 21;

if (a5 > b5)
{
    console.log(a5)
}
else if ( a5 == b5)
{
    console.log("Numbers are equal")
}
else 
{
    console.log(b5)
}

    
  



// Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Sample Input: 60°C
// Output : 60°C is 140 °F

var c6=60; 
var f6=0;
var result="";
if (f=(9*c/5) +32) {
    result= c +"°C is " + f + "°F"
}
console.log(result)


// Task 7. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double difference between that number and 13.
// Sample Input: 11 Sample Input: 32
// Output : 2 Output : 38

var a7 = 15;
var b7 = 32;

if (a7 < 13)
{
    console.log( "The difference between the number a7 and 13 is "+ (a7 - 13) * -1)
}
    if (a7 == 13)
{
    console.log("Numbers are equal")
}
else {
    console.log( "The double difference between the number a7 and 13 is "+ (a7 - 13) * 2 )
}

if (b7 < 13)
{
    console.log( "The difference between the number b7 and 13 is "+ (b7 - 13) )
}
    if (b7 == 13)
{
    console.log("Numbers are equal")
}
else 
{
    console.log( "The double difference between the number b7 and 13 is "+ (b7 - 13) * 2 )
}

// Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
// Sample Input: 12,5 Sample Input: 8,8
// Output : 17        Output : 48

var a8 = 12 ;
var b8 = 5;
var c8 = 8;
var d8 = 8;

if (a8 == b8 )
{
    console.log( 3 * (a8 + b8))
}
else
{
    console.log( a8 + b8)
}

if (c8 == d8 )
{
    console.log( 3 * (c8 + d8))
}
else
{
    console.log( c8 + d8)
}

// Task 9. Write a JavaScript program to check two given numbers and print “true” if one of the number is 50 or if their sum is 50. 
// Sample Input: 5,54   Output : -
// Sample Input: 6,50   Output: true
// Sample Input: 40,10  Output: true

var a9 = 5;
var b9 = 54;
var c9 = 6;
var d9 = 50;
var e9 = 40;
var f9 = 10;

if ( a9 === 50 || b9 === 50 || a9 + b9 === 50)
{
        console.log("true")
}
else 
{
    console.log("-")
}

if ( c9 === 50 || d9 === 50 || c9 + d9 === 50)
{
        console.log("true")
}
else 
{
    console.log("-")
}

if ( e9 === 50 || f9 === 50 || e9 + f9 === 50)
{
        console.log("true")
}
else 
{
    console.log("-")
}

// Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400, and print range in which number belongs.
// Sample Input: 13 Sample Input: 34     Sample Input: 256
// Output : -       Output : 20 ⇔ 100   Output : 100 ⇔ 400

var a10 = 13; b10 = 34, c10 = 256;

if (a10 > 20 && a10 < 100)  
{
    console.log("20 ⇔ 100 ")
}
    if ( a10 > 100 && a10 < 400)
    {
        console.log("100 ⇔ 400 ")
    }

if (b10 > 20 && b10 < 100)  
    {
        console.log("20 ⇔ 100 ")
    }
        if ( b10 > 100 && b10 < 400)
        {
            console.log("100 ⇔ 400 ")
        }

if (c10 > 20 && c10 < 100)  
    {
        console.log("20 ⇔ 100 ")
    }
         if ( c10 > 100 && c10 < 400)
        {
            console.log("100 ⇔ 400 ")
        }

