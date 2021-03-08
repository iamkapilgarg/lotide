const middle = function(array) {
  if (array.length === 1 || array.length === 2) {
    return [];
  }
  if (array.length % 2 === 0) {
    return [array[array.length / 2 - 1], array[array.length / 2]];
  }
  return [array[Math.round(array.length / 2 - 1)]];
};

module.exports = middle;