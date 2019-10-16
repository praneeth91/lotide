const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};
const countLetters = function(string1){
  let resultObj = {};
  for(let x of string1){
    if (x != " "){
      if (resultObj[x]){
      resultObj[x] +=1; 
      }
      else {
      resultObj[x] = 1;
      }   
    } 
  }
  return resultObj;

};
let result1 = countLetters("hello");

console.log(assertEqual(result1['h'],1));
console.log(assertEqual(result1['l'],2));