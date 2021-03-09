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

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);