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
    console.log("Test passed");
  } else{
    console.log("Arrays are not equal");
  }
};
let middle = function(arr4){
  let arr_return = [];
  if (arr4.length < 3){
    return arr_return;
  }
  else if (arr4.length % 2 !== 0){
    let x = Math.floor(arr4.length/2);
    arr_return.push(arr4[x]);
    return arr_return;
  }
  else {
    let x = (arr4.length/2);
    arr_return.push(arr4[x - 1],arr4[x]);
    return arr_return;
  }
};
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4]),[2,3]);