const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPosition = require('./letterPosition');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual,
  countLetters,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  letterPosition,
  map,
  takeUntil,
  without
};