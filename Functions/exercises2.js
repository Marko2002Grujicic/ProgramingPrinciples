/* Task 1: Write a function to check whether the `input` is a string or not.
    "My random string" -> true
    12 -> false 
First Way:
    function check (input){
        var result = "false"
        if (typeof input === "string") result="true"
        return result
    }
    console.log(check("marko")); 

Second Way: 
    function check(input){
        var result = typeof input ==="string" ? true : false;
        return result
    }
    console.log(check("marko"));
    */

/* Task 2: Write a function to check whether a string is blank or not. 
""My random string" -> false
" " -> true
12 -> false
false -> false

function check(inputString){
    var result = "true"
    if ( inputString.length > 0) result = "false";
    return result
}
console.log(check("")); */

/* Task 3: Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa" 

function concatenates(inputString,inputNumber){
    var result= inputString;
    if (typeof inputNumber !== "number") return result
    for (var i=0; i < inputNumber - 1; i++){
        result += inputString;
    }
    return result
}
console.log(concatenates("Ha",2)); */

/* Task 4: Write a function to count the number of letter occurrences in a string.
"My random string&quot", "n" -> 2 

function occurrences(inputString, inputLetter){
    var result= 0;
    for (var i=0; i< inputString.length; i++){
        if (inputLetter === inputString[i]) result++
    }
    return result
}
console.log(occurrences("My random string", "n")); */

/* Task 5: Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1.

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
console.log(firstO("Bananas", "a")); */


/* Task 6: Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

function lastO(inputString, charracter){
    var result = -1;
    for (var i = 0; i< inputString.length; i++){
        if (charracter === inputString[i]) result= i
    }
    return result
}
console.log(lastO("Bananas","a")); */

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


