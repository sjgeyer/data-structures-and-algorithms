'use strict';

import rotate from '../rotate-matrix';

describe('rotate a matrix', () => {
  test('should return rotated matrix', () => {
    const matrix = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];
    const result = rotate(matrix);
    expect(result[0]).toEqual([3, 2, 1]);
    expect(result[1]).toEqual([3, 2, 1]);
    expect(result[2]).toEqual([3, 2, 1]);
  });
  test('should throw error if matrix is not 9x9 - too short', () => {
    const matrix = [[1, 1, 1], [2, 2, 2]];
    expect(() => rotate(matrix)).toThrow('invalid input. matrix must be 9x9');
  });
  test('should throw error if matrix is not 9x9 - too wide', () => {
    const matrix = [[1, 1, 1, 1], [2, 2, 2], [3, 3, 3]];
    expect(() => rotate(matrix)).toThrow('invalid input. matrix must be 9x9');
  });
});
