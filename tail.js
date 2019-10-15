const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};
const tail = function(array){
let a = array;
a = a.slice(1);
return a;
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words).length,3);
