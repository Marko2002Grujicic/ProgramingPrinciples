/* Task 1: Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7] || Input:  e = 3, a = [5, -4.2, 18, 7]
Output: yes                       ||  Output: no

var e = 3;
var a = [5, -4.2, 6, 3, 7];
result = "Element e isnt in the array a!!"

for (var i = 0; i < a.length; i++) {
    if (a[i] === e) {
        result = "Element e is in the array a!"
        break;
    }
} 
console.log(result);  */

/* Task 2: Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]

var result="";
var a = [-3, 11, 5, 3.4, -8];
for ( var i = 0; i < a.length; i++){
    if ( a[i] > 0){
        result += a[i]*2+", ";
    }else{
        result += a[i]+", ";
    }
}console.log(result) */

/* Task 3: Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 

var min = 0;
var index = 0;
var a = [4,2,2,-1,6];
for (var i=0; i <a.length; i++){
    if (a[i] < min){
        min = a[i];
        index = i;
    }
} console.log("Minimum of a given array is: "+min+", and its index is: "+index) */

/* Task 4: Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 
var min = [0];
var nextMin = [0];
var inputArray=[4,2,2,-1,6];
for (var i = 0; i < inputArray.length; i++){
    if (inputArray[i] < min){
        nextMin = min;
        min = inputArray[i];
    }
}
console.log(nextMin); OBAVEZNO ZAVRSITI */

/*Task 5: */


/* Task 6:  Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

var array = [2,4,-2,7,7,-2,4,2], output = "the array is symmetric";

for (var i =0, j = array.length - 1; i<= j; i++, j--){
    if (array[i] !== array[j]){
        output = "the array isn't symmetric";
        break;
    }
} console.log(output) */





/* Task 10: Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]

var e = 78, p=3, a = [2, -2, 33, 12, 5, 8], result=[];
for (var i=0; i < a.length; i++) {
  if(p > a.length) {
    console.log('Error');
    break;
  }
  if(i === p) {
    result[result.length] = e;
  }
  result[result.length] = a[i];
}
console.log(result); */