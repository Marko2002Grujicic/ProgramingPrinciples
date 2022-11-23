/* Task 1: Write a function to check whether the `input` is a string or not.
    "My random string" -> true
    12 -> false  */
// First Way:
    function check (input){
        var result = "false"
        if (typeof input === "string") result="true"
        return result
    }
    console.log(check("marko")); 

// Second Way: 
    function check(input){
        var result = typeof input ==="string" ? true : false;
        return result
    }
    console.log(check("marko"));
    

/* Task 2: Write a function to check whether a string is blank or not. 
""My random string" -> false
" " -> true
12 -> false
false -> false */

function check(inputString){
    var result = "true"
    if ( inputString.length > 0) result = "false";
    return result
}
console.log(check("")); 

/* Task 3: Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"  */

function concatenates(inputString,inputNumber){
    var result= inputString;
    if (typeof inputNumber !== "number") return result
    for (var i=0; i < inputNumber - 1; i++){
        result += inputString;
    }
    return result
}
console.log(concatenates("Ha",2)); 

/* Task 4: Write a function to count the number of letter occurrences in a string.
"My random string&quot", "n" -> 2  */

function occurrences(inputString, inputLetter){
    var result= 0;
    for (var i=0; i< inputString.length; i++){
        if (inputLetter === inputString[i]) result++
    }
    return result
}
console.log(occurrences("My random string", "n")); 

/* Task 5: Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1. */

function firstO(inputString, charracter) {
    var result = -1;
    for (var i = 0; i < inputString.length; i++){
        if (charracter === inputString[i]){
        result = i;
        break;
    }
} 
    return result
}
console.log(firstO("Bananas", "a")); 


/* Task 6: Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1. */

function lastO(inputString, charracter){
    var result = -1;
    for (var i = 0; i< inputString.length; i++){
        if (charracter === inputString[i]) result= i
    }
    return result
}
console.log(lastO("Bananas","a")); 

/* Task 7: Write a function to convert string into an array. Space in a string should be represented as “null” in new array.
"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"] */

function convert(inputString){
    var stringLength= inputString.length;
    var arr = [];
    for (var i = 0; i < inputString.length; i++){
        var replace = inputString[i] === " " ? null : inputString[i];
        arr[arr.length] = replace;
        }
        return arr
    }
console.log(convert("My random string")); 

/* Task 8: Write a function that accepts a number as a parameter and checks if the number is prime or not. Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. */

function checkPrime(n) 
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(checkPrime(12));


/* Task 9: Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.*/
 
 function convert(inputString){
    var arr = "";
    for (var i = 0; i < inputString.length; i++){
        var replace = inputString[i] === " " ? "-" : inputString[i];
        arr += replace;
        }
        return arr
    }
console.log(convert("My random string"));

/* Task 10: Write a function to get the first n characters and add “...” at the end of newly created string. */

function string(str, n)
  {
    firstn_char = str.substring(0, n);
    return firstn_char + "...";
}
console.log(string("Exercise", 3)); 

/* Task 11: Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values. 
["1", "21", undefined, "42", "1e+3", Infinity] -->[1, 21, 42, 1000] */

function filter(array) {
    var array2 = [];
   for (var i = 0; i < array.length; i++) {
        var e = parseFloat(array[i]);
        if (isFinite(e)) {
            array2[array2.length] = e
        }
    } 
    return array2
}

console.log(filter(["1", "21", undefined, "42", "1e+3", Infinity])); 

/* Task 12. Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.  */

function retirement(gender, age) {
    if (gender === "male" && age >= 65) {
        return "Already retired."
    }
    if (gender === "female" && age >= 60) {
        return "Already retired."
    }
    if (gender === "male") {
        return "You will be retired in "+ (65 - age) + " years";
    }
    if (gender === "female")
        return "You will be retired in "+ (60 - age) + " years";
}

console.log(retirement("male", 20));

/* Task 13. Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th  */

function humanizeANumber(x) {
    if(x % 100 >= 11 && x % 100 <= 13)
        return x + "th";
    
    switch(x % 10) {
        case 1: return x + "st";
        case 2: return x + "nd";
        case 3: return x + "rd";
    }
    return x + "th";
}
console.log(humanizeANumber(11));