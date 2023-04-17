/*******************************************************************************
Write a function `alternatingMap` that accepts an array and two callbacks as
arguments. The function should return a new array containing the results of passing
the original elements into the callbacks in an alternating fashion.

In other words,
    - the first element should be passed to callback 1
    - the second element should be passed to callback 2
    - the third element should be passed to callback 1
    - the fourth element should be passed to callback 2
    - ... and so on

Examples:


*******************************************************************************/


let alternatingMap = function(array, cb1, cb2) {
    let arr = [];
    array.forEach((ele, i) => {
    	let result1 = cb1(ele, i);
    	let result2 = cb2(ele, i);

    	if (i === 0 || i % 2 === 0) {
    		arr.push(result1);
    	} else {
    		arr.push(result2)
    	}
    });

    return arr;
};

let triple = function (n) {
    return 3 * n;
};

let half = function (n) {
    return n / 2;
};
console.log(alternatingMap([7, 3, 2, 9, 8], triple, half));
// [ 21, 1.5, 6, 4.5, 24 ]


let yell = function (s) {
    return s.toUpperCase() + '!';
};

let whisper = function (s) {
    return '..' + s.toLowerCase() + '..';
};
console.log(alternatingMap(['hEy', 'EVERYone', 'whats', 'uP??'], yell, whisper));
// [ 'HEY!', '..everyone..', 'WHATS!', '..up??..' ]



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = alternatingMap;
