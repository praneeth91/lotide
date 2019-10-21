const assertArrayEqual = require('../assertArrayEqual');
const middle = require('../middle');
assertArrayEqual([1,2,3],[3,2,4]);

assertArrayEqual(middle([1]),[]);
assertArrayEqual(middle([1,2]),[]);
assertArrayEqual(middle([1,2,3]),[2]);
assertArrayEqual(middle([1,2,3,4]),[2,3]);