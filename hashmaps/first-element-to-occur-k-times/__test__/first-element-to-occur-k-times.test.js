'use strict';

import firstElementToOccurKTimes from '../first-element-to-occur-k-times';

describe('first element to occur k times', () => {
  test('should return first number to appear 2 times', () => {
    expect(firstElementToOccurKTimes([1, 2, 7, 6, 3, 7, 9, 9], 2)).toEqual(7);
  });
  test('should return -1 if no element appears k times', () => {
    expect(firstElementToOccurKTimes([1, 2, 3, 4, 5, 6], 2)).toEqual(-1);
  });
  test('should throw error if array not passed or k is 0', () => {
    expect(() => firstElementToOccurKTimes([1, 4], 0)).toThrow('must input array and k value greater than 0');
    expect(() => firstElementToOccurKTimes(null, 4)).toThrow('must input array and k value greater than 0');
  });
  test('should throw error if invalid data type passed', () => {
    expect(() => firstElementToOccurKTimes({}, 9)).toThrow('invalid data type passed');
    expect(() => firstElementToOccurKTimes([8, 2], '9')).toThrow('invalid data type passed');
  });
  test('should throw error if array is empty', () => {
    expect(() => firstElementToOccurKTimes([], 1)).toThrow('array must not be empty');
  });
});
