const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual([1, 2, 5], [1, 2]);
assertArraysEqual([1, 2], [1, 2]);
assertArraysEqual(['twenty', 21,], [3, 4]);
assertArraysEqual([1, 2, 5], [1, 2, 5]);
assertArraysEqual(['apple', 'purple', 'monkey', 82], ['apple', 'purple', 'monkey', 82]);
