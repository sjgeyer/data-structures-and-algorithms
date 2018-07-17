'use strict';

import quickSort from '../quicksort';

describe('quicksort.js', () => {
  test('should return a sorted array', () => {
    expect(quickSort([8, 2, -321, 94032, 0])).toEqual([-321, 0, 2, 8, 94032]);
  });
  test('should err out if array contains non-integers', () => {
    expect(() => quickSort(['word', 9, true, 8])).toThrow('array must only contain integers');
  });
  test('should err out if pivot is non-integer', () => {
    expect(() => quickSort([8, 2, -321, 94032, 'word'])).toThrow('array must only contain integers');
  });
  test('should err out if no array', () => {
    expect(() => quickSort()).toThrow('missing input');
  });
});
