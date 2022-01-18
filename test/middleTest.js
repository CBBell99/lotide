// const assertArraysEqual = require('../assertArraysEqual');
// const eqArrays = require('../eqArrays');
// const middle = require('../middle')

// assertArraysEqual([], (middle([1]))); // => []
// assertArraysEqual([], (middle([1, 2]))); // => []
// assertArraysEqual([2], (middle([1, 2, 3])));// => [2]
// assertArraysEqual([3], (middle([1, 2, 3, 4, 5]))); // => [3]
// assertArraysEqual([2, 3], (middle([1, 2, 3, 4]))); // => [2, 3]
// assertArraysEqual([3, 4], (middle([1, 2, 3, 4, 5, 6]))); // => [3, 4]

const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle returns the middle item of an array if it has an odd length', () => {
  it('returns 3 for [1,2,3,4,5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});

describe('#middle returns the middle 2 items of an array if it has an even length', () => {
  it('returns 3,4 for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});