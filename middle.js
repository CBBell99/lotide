

const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const middle = function(arr) {
  let length = arr.length;
  let mid = length / 2;
  if (length <= 2) {
    return [];
  }
  if (length % 2 === 0) {
    return [arr[mid - 1], arr[mid]];
  }
  return [arr[Math.floor(mid)]];

};

module.exports = middle;

