'use strict';

import printTriangle from '../pascals-triangle';

describe('pascals triangle', () => {
  test('should return n levels of pascals triangle', () => {
    const result = printTriangle(4);
    expect(result).toHaveLength(4);
    expect(result[0]).toEqual([1]);
    expect(result[1]).toEqual([1, 1]);
    expect(result[2]).toEqual([1, 2, 1]);
    expect(result[3]).toEqual([1, 3, 3, 1]);
  });
  test('should err out for incorrect input type', () => {
    expect(() => printTriangle('five')).toThrow('invalid input. input must be integer');
  });
  test('should err out for invalid number', () => {
    expect(() => printTriangle(-4)).toThrow('invalid input. input must be integer greater than 0');
  });
});
