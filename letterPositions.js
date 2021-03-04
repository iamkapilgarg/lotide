const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let str = sentence[i];
    if (results[str] === undefined) {
      results[str] = [i];
    } else {
      results[str].push(i);
    }
  }
  return results;
};

const result1 = letterPositions("kapil garg");
assertArraysEqual(result1['k'], [0]);
assertArraysEqual(result1['a'], [1, 7]);
assertArraysEqual(result1['g'], [6, 9]);
assertArraysEqual(result1['r'], [8]);