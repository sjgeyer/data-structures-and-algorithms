'use strict';

const search = require('../binary-search');

describe('binary-search.test.js', () => {
  test('Should return index of key when found', () => {
    expect(search.BinarySearch([1, 2, 3, 4, 5], 4)).toEqual(3);
    expect(search.BinarySearch([1, 2, 3, 4, 5], 1)).toEqual(0);
  });
  test('Should return -1 when key not found', () => {
    expect(search.BinarySearch([1, 2, 3, 4, 5], 8)).toEqual(-1);
  });
});
