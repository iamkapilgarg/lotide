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



//Assert Equal
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);

//EqArrays
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);

//Assert ArraysEqual
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);