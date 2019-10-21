const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArrayEqual');
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
module.exports = middle;