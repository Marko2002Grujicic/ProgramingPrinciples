var result= '';
var a = 0;
var b = 1;

if (a > 2 || a < -2) {
    result = a + ' is not between -2 and 2';
} else if(a === 0 && b===0){
    result = 'both a and b are zeros';
} else{
    result = 'I give up';
}
console.log(result);

