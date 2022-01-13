const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

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



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba));
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc));
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false
assertEqual(eqObjects(cd, cd2), false);