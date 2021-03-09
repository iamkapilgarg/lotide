const assert = require('chai').assert;
const head = require('../head');
const tail = require('../tail');
const eqArrays = require('../eqArray');
const middle = require('../middle');
const countLetters = require('../countLetters');
const countOnly = require('../countOnly');
const findKey = require('../findKey');
const findKeyByValue = require('../findKeyByValue');
const flatten = require('../flatten');
const letterPositions = require('../letterPositions');
const map = require('../map');
const takeUntil = require('../takeUntil');
const without = require('../without');
const eqObjects = require('../eqObjects');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});

describe("#tail", () => {
  it("should return length 2", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  });
  it("should return Labs", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1], "Labs");
  });
});

describe("#middle", () => {
  it("should return blank", () => {
    assert.deepEqual(middle([1]),[]);
  });
  it("should return [2]", () => {
    assert.deepEqual(middle([1, 2, 3]),[2]);
  });
  it("should return [2,3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]),[2,3]);
  });
});

describe("#count letters", () => {
  it("shoulud be equal to 2", () => {
    const result1 = countLetters("kapilgarg");
    assert.strictEqual(result1['a'],2);
  });
});

describe("#count only", () => {
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
  it("should be equal to 1", () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it("should be equal to undefined", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  it("should be equal to 2", () => {
    assert.strictEqual(result1["Fang"], 2);
  });
});

describe("#find key", () => {
  it("should be equal to noma", () => {
    const data = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.strictEqual(findKey(data, x => x.stars === 2), "noma");
  });
});


describe("#find key by value", () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };
  it("should be equal to undefined", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it("should be equal to drama", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});
describe("#Flatten", () => {
  it("should be equal to [1,2,3,4]", () => {
    assert.deepEqual(flatten([1,2,[3,4]]), [1,2,3,4]);
  });
});

describe("#Letter Positions", () => {
  const result1 = letterPositions("kapil garg");
  it("should be equal to 0", () => {
    assert.deepEqual(result1['k'], [0]);
  });
  it("should be equal to [1,7]", () => {
    assert.deepEqual(result1['a'], [1, 7]);
  });
});
describe("#Map", () => {
  it("should be equal to [ 'g', 'c', 't', 'm', 't' ]", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    assert.deepEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
  });
});
describe("#takeUntil", () => {
  it("should be equal to [ 1, 2, 5, 7, 2 ]", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(results1,[ 1, 2, 5, 7, 2 ]);
  });
});

describe("#without", () => {
  it("should be equal to ['hello', 'world', 'lighthouse']", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});

describe("#eqArrays", () => {
  it("should be true", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
});

describe("#eqObjects", () => {
  it("should be true", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(ab, ba), true); // => true
  });
});