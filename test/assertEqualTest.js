const assert = require('chai').assert;

const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');
const eqArrays = require('../eqArray');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const countLetters = require('../countLetters');
const countOnly = require('../countOnly');
const findKey = require('../findKey');
const findKeyByValue = require('../findKeyByValue');

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
describe("", () => {
  it("", () => {

  });
});
describe("", () => {
  it("", () => {

  });
});
describe("", () => {
  it("", () => {

  });
});
describe("", () => {
  it("", () => {

  });
});
describe("", () => {
  it("", () => {

  });
});
describe("", () => {
  it("", () => {

  });
});


//Assert Equal
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);

//EqArrays
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);

//Assert ArraysEqual
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);