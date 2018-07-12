'use strict';

import missingNumber from '../missing-number-in-array';

describe('missing number in array', () => {
  test('should return missing number in array', () => {
    expect(missingNumber([1, 2, 3, 5])).toEqual(4);
  });
  test('should return undefined if array contains all numbers', () => {
    expect(missingNumber([1, 2, 3, 4, 5])).toBeUndefined();
  });
  test('should throw err if invalid data type passed', () => {
    expect(() => missingNumber('1, 2, 3, 5')).toThrow('invalid input. must input array.');
  });
});
