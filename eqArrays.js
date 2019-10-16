const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};
let eqArrays = function(arr1,arr2) {
  let str1 = arr1.join('');
  let str2 = arr2.join('');
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 1, 3]), false);