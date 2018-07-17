'use strict';

import findUniqueInArray from '../find-unique-in-array';

describe('find unique in array', () => {
  test('should return unique value', () => {
    expect(findUniqueInArray([1, 1, 2, 2, 3, 4, 4, 5, 5])).toEqual(3);
  });
  test('should return that there are no unique values', () => {
    expect(findUniqueInArray([1, 1, 2, 2])).toEqual('No unique values in array');
  });
  test('should throw err for invalid data type', () => {
    expect(() => findUniqueInArray('1, 1, 2, 2, 3, 4, 4, 5, 5')).toThrow('invalid input. input must be an array');
  });
});
