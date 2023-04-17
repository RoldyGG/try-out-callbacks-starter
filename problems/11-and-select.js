/*******************************************************************************
Write a function `andSelect` that accepts an array and two callbacks. The function
should return a new array containing elements of the original array that result in
true when passed into both callbacks.

Examples:



*******************************************************************************/

let andSelect = function(array, cb1, cb2) {
    let res1 = cb1;
    let res2 = cb2;
    let arr = [];

    for (i = 0; i < array.length; i++) {

    	let result1 = res1(array[i]);
    	if (result1 === true) {

    		let result2 = res2(array[i]);
    		if (result1 && result2 === true) {

    			arr.push(array[i]);

    		}
    	}
    }
    return arr;
    };

let isEven = function (n) {
    return n % 2 === 0;
};

let isPositive = function (n) {
    return n > 0;
};

console.log(andSelect([-3, 8, 7, 11, 6, 12, -4], isEven, isPositive));
// [ 8, 6, 12 ]

let isUpperCase = function (s) {
    return s === s.toUpperCase();
};

let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
}
console.log(andSelect(['ants', 'APPLES', 'ART', 'BACON', 'arm'], isUpperCase,  startsWithA));
// [ 'APPLES', 'ART' ]





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = andSelect;
