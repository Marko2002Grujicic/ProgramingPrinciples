// This function checks if a number is even or odd
function checkIfNumberIsEvenOrOdd(n){
    if (typeof n !== "number"){
        return "Invalid input";
    }
    var result = "";
    if (n % 2 === 0){
        result = "even";  
    }else{
        result = "odd";
    }
    return result;
}
var r = checkIfNumberIsEvenOrOdd();
console.log(r);

var f = checkIfNumberIsEvenOrOdd(22);
console.log(f);


// This function is used to sum numbers

function sumNumbers (arrayOfNumbers){
    var result = 0;
    for (var i = 0; i < arrayOfNumbers.length; i++){
        result += arrayOfNumbers[i]
    }
    return result;
}

var l = sumNumbers( [22,33,44,55]);
console.log(l);
