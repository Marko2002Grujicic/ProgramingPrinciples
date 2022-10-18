var isActive = false;

console.log(3+4);
var a = true || true || false || false || true;
var b = true && true && false && false && true;
var c = a || b;

// dve kose crte su znak za negaciju, dve kose crte daju duplu negaciju, tj. vracaju vrednost u prvobitan oblik.

var d = !!c;
// prazan string je '' falsy vrednost, ukoliko ima bilo šta drugo onda je true. broj je 0 falsy vrednost. Undefined je isto falsy vrednost. NaN (NotANumber) je takodje prazan string.

var e = '';
var f = !!e;
console.log(c);
console.log(d);
console.log(f);

var g = NaN;
console.log(typeof g);
// proveravamo da li je mynumber deklarisan
var mynumber = 'dddd' || 10;

console.log(mynumber);

var newA = 20;
var newB = 20;

var newC = newA === newB;
console.log(newC);

var input = '';
var newC = input || 'default value';    