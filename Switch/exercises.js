/* Task 1 Write a program that shows text representation of a day in a week for a number input from
1 to 7. Print output in console.
For input 1, output should be “Monday”.

var day = 4;
var result = '';

switch (day){
    case 1:
        result = 'Monday';
        break;
    case 2:
        result = 'Tuesday';
        break;
    case 3:
        result = 'Wednesday';
        break;
    case 4:
        result = 'Thursday';
        break;
    case 5:
        result = 'Friday';
        break;
    case 6:
        result = 'Saturday';
        break;
    case 7:
        result = 'Friday';
        break;
}
console.log(result); */

/* Task 2 Write a program that shows text representation of a day in a week for a number input from
1 to 7. All other cases output a message explaining that input must be a number between 1
and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”.

var day = 4;
var result = '';

switch (day){
    case 1:
        result = 'Monday';
        break;
    case 2:
        result = 'Tuesday';
        break;
    case 3:
        result = 'Wednesday';
        break;
    case 4:
        result = 'Thursday';
        break;
    case 5:
        result = 'Friday';
        break;
    case 6:
        result = 'Saturday';
        break;
    case 7:
        result = 'Friday';
        break;
    default:
        result = 'Input must be a number between 1 and 7'
}
console.log(result); */

/* Task 3 Write a program that for a 1-7 number input (representing a day in a week) shows if that day
is a weekday or weekend. All other cases output a message explaining that input must be a
number between 1 and 7.
For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.

var day = 4;
var result = '';

switch (day){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result = 'Weekday';
        break;
    case 6:
    case 7:
        result = 'Weekend';
        break;
    default:
        result = 'Input must be a number between 1 and 7';
}
console.log(result); */

/* Task 4 Write a program that for a 1-12 number input (representing a month in a year) shows that
month’s name. All other cases output a message explaining that input must be a number
between 1 and 12.

var day = 4;
var result = '';

switch (day){
    case 1:
        result = 'Monday';
        break;
    case 2:
        result = 'Tuesday';
        break;
    case 3:
        result = 'Wednesday';
        break;
    case 4:
        result = 'Thursday';
        break;
    case 5:
        result = 'Friday';
        break;
    case 6:
        result = 'Saturday';
        break;
    case 7:
        result = 'Friday';
        break;
    default:
        result = 'Input must be a number between 1 and 7';
}
console.log(result); */

/* Task 5: Write a program that for a 1-12 number input (representing a month in a year) shows what
season it is. All inputs different from 1-12 output a message explaining that input must be a
number between 1 and 12.

var month = 7;
var result = '';
switch (month){
    case 1:
    case 2:
    case 3:
        result = 'Winter';
        break;
    case 4:
    case 5:
    case 6:
        result = 'Spring';
        break;
    case 7:
    case 8:
    case 9:
        result = 'Summer';
        break;
    case 10:
    case 11:
    case 12:
        result = 'Fall';
        break;
    default:
        result = 'Input must be a number between 1 and 12';
}
console.log(result); */


/* Task 6: Write a program that for a string input of a grade from “A”-“F” outputs a proper info
message about that grade in the following manner: A -Good job", B -"Pretty good",C -"Passed", D - "Not so good, F -"Failed". Input different from letters A-F outputs a message
"Unknown grade"

var grade ='A';
var result = '';
switch (grade){
    case 'A':
        result = 'Good Job';
        break;
    case 'B':
        result = 'Pretty good';
        break;
    case 'C':
        result = 'Passed';
        break;
    case 'D':
        result = 'Not so good'; 
        break;       
    case 'F':
        result = 'Failed';
        break;      
    default:
        result = 'Unknown grade';
        break;
}
console.log(result); */

/* Task 7. Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message "Please
choose a different city"

var city = 'Liverpool';
var state = '';
switch (city){
    case 'Niš':
    case 'Belgrade':
    case 'Zaječar':
    case 'Novi Sad':
    case 'Negotin':
        state ='Serbia';
        break;
    case 'New York':
        state = 'USA';
        break;
    case 'London':
    case 'Manchester':
    case 'Liverpool':
    case 'Notthingham':
        state = 'England';
        break;
    case 'Zagreb':
    case 'Split':
    case 'Rijeka':
        state = 'Croatia';
        break;
    case 'Vidin':
    case 'Sofia':
        state ='Bulgaria'
        break;
    default:
        state = 'Please choose a different city'
        break;
}
console.log(state); */

/* Task 8: Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!

var a = 15;
var b = 4;
var operation = '/';

switch (operation){
    case '+':
    console.log(a + b);
    break;
    case '-':
        console.log(a - b);
        break;
    case '*':
        console.log(a * b);
        break;
    case '/':
        console.log(a / b);
        break;
    default:
        console.log( 'Please enter a valid operation');
        break;
}

*/

