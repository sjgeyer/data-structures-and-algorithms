'use strict';

import hammingDistance from '../hamming-distance';

describe('hamming distance', () => {
  test('should return number of differences in strings', () => {
    expect(hammingDistance('10111010', '10010011')).toEqual(3);
  });
  test('should throw err if invalid data type passed', () => {
    expect(() => hammingDistance({}, 'string')).toThrow('invalid input type');
  });
  test('should throw err if strings are not the same length', () => {
    expect(() => hammingDistance('test', 'tests')).toThrow('invalid input. strings must be same length');
  });
});
