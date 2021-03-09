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

module.exports = countLetters;