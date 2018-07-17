'use strict';

import findPairs from '../find-pairs-with-given-sum';

describe('find pairs with given sum', () => {
  test('should return all pairs', () => {
    const array1 = [1, 2, 4, 5, 7];
    const array2 = [5, 6, 3, 4, 8];
    const result = findPairs(array1, array2, 9);
    expect(result).toHaveLength(3);
  });
  test('should throw error if no x passed', () => {
    expect(() => findPairs([1, 2], [3, 4])).toThrow('invalid input. must define x');
  });
  test('should throw error if invalid data type passed', () => {
    expect(() => findPairs({}, [2, 3], 9)).toThrow('invalid data type');
  });
  test('should throw error if arrays are empty', () => {
    expect(() => findPairs([1, 2], [], 3)).toThrow('invalid input. arrays must not be empty');
  });
});
