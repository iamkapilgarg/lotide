const eqArrays = function(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (eqArrays(arr1[i], arr2[i]) === false) {
        return false;
      }
    }
    return true;
  }
  return arr1 === arr2;
};

module.exports = eqArrays;