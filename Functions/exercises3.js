/* Task 1. Write a program to insert a string within a string at a particular position (default is 1,
beginning of a string).
"My random string", "JS" -> "JS My random string"
"My random string", "JS", 10 -> "My random JS string" */

function insertString(string1, string2, position) {
    if (!position) {
      position = 1;
    }
    var output = "";
    for (var i = 0; i < string1.length; i++) {
      if (i === position - 1) {
        output += string2
      }
      output += string1[i]
    }
    return output
  }
  console.log(insertString("My random string", "JS", 10))
  
  
  
  /* Task 2. Write a program to join all elements of the array into a string skipping elements that are
  undefined, null, NaN or Infinity.
  [NaN, 0, 15, false, -22, "", undefined, 47, null] */
  
  function joinString(array) {
          var i = -1,
              length = array ? array.length : 0,
              index = -1,
              result = [];
      
          while (index++ < length) {
              var value = array[index];
      
              if (value) {
                  result[++index] = value;
              }
          }
      return result;
  }
  console.log(joinString([NaN, 0, 15, false, -22, "", undefined, 47, null]));
  
  
  /* Task 3. Write a program to filter out falsy values from the array.
  [NaN, 0, 15, false, -22, "", undefined, 47, null] ->[15, -22, 47]  */
  
  function FalsyRemover(array) {
      for (var i = 0; i < array.length; i++) {
          if (!array[i]) {
              delete array[i]
          }
      }
      return array
  }
  console.log(FalsyRemover([NaN, 0, 15, false, -22, "", undefined, 47, null]))
  
  
  /* Task 4. Write a function that reverses a number. The result must be a number.
  12345 -> 54321 // Output must be a number */
  
  function numReverse(n) {
      var b = "" + n, f = "";
      if (typeof n !== "number") {
        return "Invalid input."
      } 
      for (var i = 0, j = b.length; i < b.length; i++, j--) {
          f += j;
      }
      var m = parseInt(f);
      return m
      }
  console.log(numReverse(12345))
  
  
  /* Task 5. Write a function to get the last element of an array. Passing a parameter "n" will return the
  last "n" elements of the array. 
  [7, 9, 0, -2] -> -2
  [7, 9, 0, -2], 2 -> [0, -2]    */
  
  function lastElement(array, n) {
    var array2 = [], output = [];
    if (typeof(n) === "undefined") {
      return array[array.length-1]
    } 
    for (var i = n; i > 0; i--) {
      output[output.length] = array[i]
    }
    return output
  }
  console.log(lastElement([7, 9, 0, -2], 2))
  
  
  /* Task 6. Write a function to create a specified number of elements with pre-filled numeric value
  array.
  6, 0 -> [0, 0, 0, 0, 0, 0]
  2, "none" -> ["none", "none"]
  2 -> [null, null]  */
  
  function numElements(a, b) {
    var t = [];
    for (var i = 0; i < a; i++) {
      if (typeof b === "undefined") {
        t[t.length] = null
      } else {
        t[t.length] = b;
      }
    }
    return t
  }
  console.log(numElements(2, "none"))
  
  
  // Task 7. Write a function that says whether a number is perfect. 
  
  function perfectNum(n) {
      var result = 0;
      for (var i = 1; i <= n - 1; i++) {
        if (n % i === 0) {
          result += i;
        }
      }
      return result === n ? "Number is perfect" : "Number is not perfect";
    }
    console.log(perfectNum(317));
    
  
  /* Task 8. Write a function to find a word within a string.
  'The quick brown fox', 'fox' -> "'fox' was found 1 times"
  'aa bb cc dd', 'aa' -> "'aa' was found 2 times"  */
  
  function WordFinder(sentence, word) {
      var arrSentence = [];
      var count = 0;
      arrSentence[0] = "";
      var times = 0;
      var output = "";
      for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] === " " || sentence[i] === ",") {
          count++;
          arrSentence[count] = "";
        } else {
          arrSentence[count] += sentence[i];
        }
      }
      for (var j = 0; j < arrSentence.length; j++) {
        if (arrSentence[j] === word) {
           times++
        }
      } 
      if (times > 1) {
        output = " times"
      } else {
        output = " time"
      }
      return word + " was found " + times + output  
    }
    
     
  console.log(WordFinder("The quick brown fox", "fox"))
  
  
  /* Task 9. Write a function to hide email address.
  "myemailaddress@bgit.rs" -> "mye...@bgit.rs" */
  
  function hideEmail(email) {
      var m = email, output = "";
  
      for (i = 0; i < email.length; i++) {
        if (i > 2 && i< email.indexOf("@") ) {
          output += ".";
        } else {
          output += email[i];
        }
    }
      return output
  }
  console.log(hideEmail("myemailaddress@bgit.rs"))
  
  
  // Task 10. Write a program to find the most frequent item of an array.
  
  function mostFreq(array) {
    var number = 1, frequency = 0, e;
  
    for (var i = 0; i < array.length; i++) {
      for (var j = i; j < array.length; j++) {
        if (array[i] === array[j]) {
          frequency++;
        }
        if (number < frequency) {
          number = frequency;
          e = array[i];
        }
      }
      frequency = 0;
    }
    return e
  }
  
  console.log(mostFreq([5, "B", 7, "I", "T", "B", "G"]));