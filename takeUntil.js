const takeUntil = (array, callback) => {
  let result = [];
  for (let item of array) {
    if (callback(item)) {
      return result;
    }
    result.push(item);
  }
  return result;
};

module.exports = takeUntil;