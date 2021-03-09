const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    let itemFound = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        itemFound = true;
      }
    }
    if (!itemFound) {
      result.push(source[i]);
    }
  }
  return result;
};

module.exports = without;