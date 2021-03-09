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