'use strict';

import radixSort from '../radix-sort';

describe('radix sort', () => {
  test('should return sorted array', () => {
    expect(radixSort([8, 432, 41, 85, 10])).toEqual([8, 10, 41, 85, 432]);
  });
  test('should throw error if input is invalid', () => {
    expect(() => radixSort({ 0: 35 })).toThrow('invalid input. must input array');
  });
  test('should throw error if array is empty', () => {
    expect(() => radixSort([])).toThrow('invalid input. cannot sort empty array');
  });
});

