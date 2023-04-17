/*******************************************************************************
Write a function `xorSelect` that accepts an array and two callback as arguments.
The function should return a new array containing elements of the original array
that result in true when passed in one of the callbacks, but not both.

Examples:


*******************************************************************************/

let xorSelect = function(array, cb1, cb2) {
  let arr = [];

  for (i = 0; i < array.length; i++) {
    let result1 = cb1(array[i]);
    let result2 = cb2(array[i]);

    if (result1 === true && result2 !== true) {
      arr.push(array[i]);
    } else if (result1 !== true && result2 === true) {
      arr.push(array[i]);
    }

  }
  return arr;
};


let isEven = function(n) {
  return n % 2 === 0;
};

let isPositive = function(n) {
  return n > 0;
};

console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// [ -2, 1, 3 ]


let longString = function(s) {
  return s.length > 4;
};

let startsA = function(s) {
  return s[0] === "a";
};

console.log(
  xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
);
// [ 'art', 'app', 'buttery' ]



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = xorSelect;
