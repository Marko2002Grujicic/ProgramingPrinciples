
/*  First way:
var month = 4;
var result = '';

if (month === 1) {
    result =  'January';
}
else if (month === 2 ){
    result='February';
}
else if (month === 3 ){
    result='March';
}
else if (month === 4 ){
    result='April';
}
else if (month === 5 ){
    result='May';
}
else if (month === 6 ){
    result='June';
}
else{
    result='not supported input!!';
}
console.log(result); */

// Second way:

var month = 4;
var result = '';
switch (month) {
    case 1:
        result='January';
        break;
    case 2:
        result='February';
        break;
    case 3:
        result='March'
        break;
    case 4:
        result='April';
        break;
    case 5:
        result='May';
        break;
    case 6:
        result='June'
        break;
    default:
        result='not supported input!!'
}
console.log(result);

var carBrand = 'citroen';
var result = '';
switch (carBrand) {
    case 'bmw':
    case 'audi':
    case 'mercedes':
        result='This is a German car'
        break;
    case 'peugeot':
    case 'renault':
    case 'citroen':
        result='This is a French car'
        break;
    default:
        result='uknown!!'
}
console.log(result);