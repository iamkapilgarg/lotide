 const assert = require('chai').assert;

const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');
const eqArrays = require('../eqArray');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});

//Assert Equal
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);

//Tail
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

//EqArrays
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);

//Assert ArraysEqual
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);

//middle
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);