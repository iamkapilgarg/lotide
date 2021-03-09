const numWaterBottles = function(investment) {
  let fullBottles = investment / 2;
  let emptyBottles = 0;
  let caps = 0;
  let drank = 0;
  let exchangeEmpty = 0;
  let exchangeCaps = 0;
  do {
    //drinking here
    let resultDrink = drink(drank, fullBottles, emptyBottles, caps);
    drank = resultDrink.drank;

    //exchanging here
    let resultExchange = exchange(resultDrink.emptyBottles, resultDrink.caps);
    fullBottles = resultExchange.fullBottles;
    emptyBottles = resultExchange.emptyBottles;
    caps = resultExchange.caps;

    //calculate exchange empty and caps
    exchangeEmpty = exchangeEmpty + resultExchange.exchangeEmpty;
    exchangeCaps = exchangeCaps + resultExchange.exchangeCaps;
    
  } while (fullBottles > 0 || emptyBottles > 1 || caps > 3);

  return {"TotalBottles": drank,
    "RemainingBottles": emptyBottles,
    "RemainingCaps": caps,
    "ExchangedEmptyBottles": exchangeEmpty,
    "ExchangedCaps": exchangeCaps
  };
};

let drink = function(drank, fullBottles, emptyBottles, caps) {
  drank = drank + fullBottles;
  emptyBottles = fullBottles + emptyBottles,
  caps = fullBottles + caps;
  fullBottles = 0;
  return { drank, emptyBottles, caps };
};

let exchange = function(emptyBottles, caps) {
  let exchangeEmpty = Math.floor(emptyBottles / 2);
  let exchangeCaps = Math.floor(caps / 4);
  let fullBottles = Math.floor(emptyBottles / 2) + Math.floor(caps / 4);
  emptyBottles = emptyBottles % 2;
  caps = caps % 4;
  return {fullBottles, emptyBottles, caps, exchangeEmpty, exchangeCaps};
};

console.log(numWaterBottles(10));