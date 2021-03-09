const findKey = (object, callback) => {
  for (let i in object) {
    if (callback(object[i])) {
      return i;
    }
  }
};

module.exports = findKey;
