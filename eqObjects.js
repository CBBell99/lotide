const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(mainObj, diffObj) {
  const objOneKeys = Object.keys(mainObj)
  const objTwoKeys = Object.keys(diffObj)
  if (objOneKeys.length !== objTwoKeys.length) {
    return false;
  }
  for (let key in mainObj) {
    //console.log(mainObj[key], diffObj[key])
    if (mainObj[key] !== diffObj[key]) {
      return false;
    }
    if (!diffObj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2", g: undefined };
const ba = { b: "2", a: "1", f: undefined };
assertEqual(
  eqObjects(ab, ba),
  false
); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(
  eqObjects(ab, abc),
  false
); // => false