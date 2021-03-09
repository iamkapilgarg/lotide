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

module.exports = letterPositions;