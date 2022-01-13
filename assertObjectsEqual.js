const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(mainObj, diffObj) {
  const objOneKeys = Object.keys(mainObj);
  const objTwoKeys = Object.keys(diffObj);
  if (objOneKeys.length !== objTwoKeys.length) {
    return false;
  }
  for (let key in mainObj) {
    // check if values are arrays
    if (Array.isArray(mainObj[key])) {
      if (Array.isArray(diffObj[key])) {
        if (!eqArrays(mainObj[key], diffObj[key])) {
          return false;
        }
      }
    } else {
      //compares primitives
      if (mainObj[key] !== diffObj[key]) {
        return false;
      }
    }
  }
  return true;
};



const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

//assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' })
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1', c: '3' });