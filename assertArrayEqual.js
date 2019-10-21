const eqArrays = require('./eqArrays');
let assertArraysEqual = function(arr3,arr4){
  if (eqArrays(arr3,arr4) === true) {
     console.log(`✅✅✅ Assertion Passed: ${arr3} === ${arr4}`);  
    } else{
      return console.log(`🛑🛑🛑 Assertion Failed: ${arr3} !== ${arr4}`);
    }
};

module.exports = assertArraysEqual;