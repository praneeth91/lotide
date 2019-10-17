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
const assertObjectsEqual = function(object3, object4) {
  const inspect = require('util').inspect;
  if (eqObjects(object3,object4) === true) {
    console.log(`Objects are equal: ${inspect(object3)}  === ${inspect(object4)}`);
  } else{
    console.log(`Objects are not equal: ${inspect(object3)}  !== ${inspect(object4)}`);
  }
};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd2,dc));