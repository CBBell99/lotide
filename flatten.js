const eqArrays = function(arr1, arr2) {

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const flatten = function(array) {
  let flattenArray = [];
  //loop through array and see if there is another array in it
  for (let index of array) {
    if (Array.isArray(index)) {
      for (let j of index) {
        flattenArray.push(j);
      }
    } else {
      flattenArray.push(index);
    }
  }
  return flattenArray;
};





console.log(assertArraysEqual([1, 2, 3, 4, 5, 6, 7], flatten([1, 2, 3, [4], 5, [6, 7]])));