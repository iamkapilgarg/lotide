const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let i = 0; i < allItems.length; i++) {
    let item = allItems[i];
    if (itemsToCount[item] !== undefined && itemsToCount[item] === true) {
      if (result[item] === undefined) {
        result[item] = 1;
      } else {
        result[item]++;
      }
    }
  }
  return result;
};

module.exports = countOnly;