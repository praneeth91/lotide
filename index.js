const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArrayEqual = require('./assertArrayEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const findKey = require('./findkey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPosition = require('./letterPosition');
const map = require('./map');
const takeUntill = require('./takeUntil');
const without = require('./without');
module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArrayEqual: assertArrayEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPosition: letterPosition,
  map: map,
  takeUntill: takeUntill,
  without: without
};