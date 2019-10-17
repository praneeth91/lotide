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
const eqObjects = function(object1,object2){
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  if(arr1.length !== arr2.length){
    return false;
  }
  for (let x of arr1){
    if(Array.isArray(object1[x]) && Array.isArray(object2[x])){
      return eqArrays(object1[x],object2[x]);
    }
    if(object1[x] !== object2[x]){
      return false;
    }
  }
  return true;
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab,ba),true));
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd,cd2),false));
