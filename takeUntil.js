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
const takeUntil = function(array, callback) {
  let arr =[];
  for(let i of array){
    if(callback(i) === false){
      arr.push(i);
    }
    else{
      return arr;
    }
  }
  return arr;
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1,[1,2,5,7,2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,["I've","been","to","Hollywood"]);
