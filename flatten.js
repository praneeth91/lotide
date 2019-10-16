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
    console.log("Array is flattened");
  } else{
    console.log("Array is not flat");
  }
};
let flatten = function(arr5){
  let result_arr = []; 
  for(let i = 0; i < arr5.length; i++){
    if (Array.isArray(arr5[i])){
    for(let y = 0; y < arr5[i].length; y++){
      result_arr.push(arr5[i][y]);
    }
      //console.log(result_arr);
    }
    else {
      result_arr.push(arr5[i]);
    }
  }
  return result_arr;
};
assertArraysEqual(flatten([1,2,3,[6,7],10]),[1,2,3,6,7,10]);