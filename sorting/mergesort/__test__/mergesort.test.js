'use strict';

import mergeSort from '../mergesort';

describe('mergesort.js', () => {
  test('should return sorted array', () => {
    const array = [8, 3, 9, 0, 1];
    expect(mergeSort(array)).toEqual([0, 1, 3, 8, 9]);
  });
  test('should throw error for empty array', () => {
    expect(() => mergeSort([])).toThrow('array is empty');
  });
  test('should throw error for empty input', () => {
    expect(() => mergeSort()).toThrow('missing input');
  });
});
