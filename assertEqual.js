const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual('Jimmy Jab Games', 'Jimmy Jab Games');
assertEqual('recuérdame', 'recuerdame');
assertEqual(1969, 2099);
assertEqual(1985, 1985);
