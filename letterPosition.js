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
    console.log("Test case passsed");
  } else{
    console.log("Test case failed");
  }
};
const letterPositions = function(sentence) {
  const results = {};
  const arr = sentence.split("");
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== " "){
      if(results[(arr[i])]){
        results[(arr[i])].push(i);
      }
      else {
        results[arr[i]] = [i];      
      }
    }
  }
  return results;
};
assertArraysEqual(letterPositions("hello")["e"], [1]);
