const findKeyByValue = function(tvShowsByGenre, tvShow) {
  for (let key of Object.keys(tvShowsByGenre)) {
    if (tvShowsByGenre[key] === tvShow) {
      return key;
    }
  }
};

module.exports = findKeyByValue;