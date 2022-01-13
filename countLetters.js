const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  string = string.split(' ').join('');
  let result = {};
  for (let char of string) {
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
};


assertEqual(countLetters("lighthouse in the house").g, 1);