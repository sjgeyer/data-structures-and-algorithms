'use strict';

import findTriangles from '../find-triangles';

describe('find triangles', () => {
  test('should return three possible triangles', () => {
    const result = findTriangles([3, 6, 7, 4]);
    expect(result).toHaveLength(3);
  });
  test('should throw error if missing input', () => {
    expect(() => findTriangles()).toThrow('missing input');
  });
  test('should throw error if invalid data type passed', () => {
    expect(() => findTriangles({})).toThrow('invalid input type. must input array');
  });
});
