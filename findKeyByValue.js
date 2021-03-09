const findKeyByValue = function(tvShowsByGenre, tvShow) {
  for (let key of Object.keys(tvShowsByGenre)) {
    if (tvShowsByGenre[key] === tvShow) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");