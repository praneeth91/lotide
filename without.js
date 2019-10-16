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
let without = function(arr5,arr6){
  let result_arr = arr5;
  for (let i = 0; i < result_arr.length; i++){
    for (let y = 0; y < arr6.length; y++){
      if(result_arr[i] === arr6[y]){
        result_arr.splice(i,1);
      }
    }
  }
 return result_arr;
}
assertArraysEqual(without([1,2,3,4,5],[3]), [1,2,4,5]);
assertArraysEqual(without([1,2,3,4,5],[3,4]),[1,2,5]);