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
});
