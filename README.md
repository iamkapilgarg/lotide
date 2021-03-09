# Lotide

A more optimized clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @iamkapilgarg/lotide`

**Require it:**

`const _ = require('@iamkapilgarg/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  * head: To get the first element of the array
  * tail: To get all the elements of the array except the first one
  * middle: To get the middle element[s] of the array
  * countLetters: To count the letters of a string
  * countOnly: To count particular character
  * findKey: To find key in an array
  * findKeyByValue: To find key by value in an array
  * flatten: To flatten a nested array
  * letterPositions: To get the positions of a letter
  * map: To run any callback function on an array
  * takeUntil: To get characters until particular character
  * without: To remove a particular word from a string
  * eqArray: To compare arrays
  * eqObjects: To compare objects