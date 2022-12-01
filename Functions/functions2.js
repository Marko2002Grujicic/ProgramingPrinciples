// Task 1: Make  filter functions
function filter(a, cb) {
    var b = [];
    for (var i = 0; i < a.length; i++) {
      var element = a[i];
      var isConditionTrue = cb(element);
      if (isConditionTrue) {
        b[b.length] = a[i];
      }
    }
  
    return b;
  }
  
  var arr = [1, 2, 3, 4, 5, 6, 7, 8];
  
  function isEven(e) {
    return e % 2 === 0;
  }
  var resEven = filter(arr, isEven);
  console.log(resEven);
  
  function isOdd(e) {
    return e % 2 !== 0;
  }
  var resOdd = filter(arr, isOdd);
  console.log(resOdd);
  
  function isNegative(e) {
    return e < 0;
  }
  var resNegative = filter(arr, isNegative);
  console.log(resNegative);
  
  function isPositive(e) {
    return e > 0;
  }
  var resPositive = filter(arr, isPositive);
  console.log(resPositive);
  
  
  // Task 2

  function map(array, callback_function){
    var b = [];
    for (var i = 0; i < array.length; i++){
        var element = array[i];
        var processedElement = callback_function(element);
        b[b.length] = processedElement;
    }
    return b;
  }

  var arr = [1,2,3,4,5,6,7,8];

  function incrementByOne(e){
    return e + 1;
  }
  var resIncrementByOne = map(arr, incrementByOne);
  console.log(resIncrementByOne);

  function double(e){
    return e * 2;
  }
  var resDouble = map(arr, double);
  console.log(resDouble);

  function powerEvenNum(e){
    if (e % 2 === 0){
        return e*e;
    }
    return e;
  }
  var resPower = map(arr, powerEvenNum);
  console.log(resPower);
  
  
  
  