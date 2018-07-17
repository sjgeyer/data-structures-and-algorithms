'use strict';

import mergeThreeArrays from '../merge-sorted-arrays';

describe('merge three arrays', () => {
  test('should return a single sorted array', () => {
    const array1 = [1, 5, 8, 10, 15];
    const array2 = [2, 7, 12, 16];
    const array3 = [3, 4, 6, 9, 11, 17];
    const result = mergeThreeArrays(array1, array2, array3);
    expect(result).toHaveLength(15);
    expect(result[0]).toEqual(1);
    expect(result[14]).toEqual(17);
  });
  test('should throw error if arrays are empty', () => {
    expect(() => mergeThreeArrays([1], [], [5])).toThrow('invalid input. arrays must not be empty');
  });
  test('should throw error for invalid input type', () => {
    expect(() => mergeThreeArrays([1, 3], [4, 5], 9)).toThrow('invalid input. arguments must be arrays');
  });
});
