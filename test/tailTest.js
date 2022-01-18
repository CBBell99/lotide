// const tail = require('../tail');
// const assertEqual = require('../assertEqual');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// assertEqual(words[0], 'Lighthouse');
// assertEqual(words[1], 'Labs');

const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail returns every item but the first of an array', () => {
  it('returns [2, 3, 4] for [1, 2, 3, 4]', () => {
    assert.deepEqual(tail([1, 2, 3, 4,]), [2, 3, 4]);
  });
});
describe('#tail returns every item but the first of an array', () => {
  it('returns ["monkey", "fuzz"] for ["purple", "monkey", "fuzz"]', () => {
    assert.deepEqual(tail(["purple", "monkey", "fuzz"]), ["monkey", "fuzz"]);
  });
});