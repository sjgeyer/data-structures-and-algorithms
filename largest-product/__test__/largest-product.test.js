'use strict';

const product = require('../largest-product');

describe('largest-product.test.js', () => {
  test('Should return 72', () => {
    expect(product.LargestProduct([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual(72);
    expect(product.LargestProduct([[9, 3, 1], [8, 7, 4], [2, 5, 6]])).toEqual(72);
  });
  test('Should return 56', () => {
    expect(product.LargestProduct([[1, 2], [3, 4], [5, 6], [7, 8]])).toEqual(56);
  });
});
