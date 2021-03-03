const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let result = {};
  for (let str of string) {
    if (result[str] === undefined) {
      result[str] = 1;
    } else {
      result[str]++;
    }
  }
  return result;
};

const result1 = countLetters("kapilgarg");

assertEqual(result1['a'],2);