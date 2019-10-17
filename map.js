let eqArrays = function(arr1,arr2) {
  let str1 = arr1.join('');
  let str2 = arr2.join('');
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
};
let assertArraysEqual = function(arr3,arr4){
  if (eqArrays(arr3,arr4) === true) {
    console.log("Arrays are equal");
  } else{
    console.log("Arrays are not equal");
  }
};
const map = function(array,callback){
const results = [];
for(let x of array){
results.push(callback(x));
}  
return results;
};
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1,['g','c','t','m','t']);
