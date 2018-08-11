'use strict';

import conwaysGameOfLife from '../conways-game-of-life';

describe('conways game of life', () => {
  test('result for 1 iteration vs. no ticks passed should be the same', () => {
    const seed = [[1, 1, 1], [0, 1, 0], [1, 0, 1]];
    expect(conwaysGameOfLife(seed)).toEqual(conwaysGameOfLife(seed, 1));
  });
  test('should change seed', () => {
    const seed = [[1, 1, 1], [0, 1, 0], [1, 0, 1]];
    expect(conwaysGameOfLife(seed)[1][1]).not.toEqual(seed[1][1]);
  });
  test('should throw error if invalid data type is passed', () => {
    expect(() => conwaysGameOfLife({})).toThrow('invalid data type. seed must be an array');
  });
  test('should throw error if seed has invalid data types', () => {
    const seed = [[0, 1, 'blue']];
    expect(() => conwaysGameOfLife(seed)).toThrow('invalid data type passed. seed must be made of 0s and 1s');
  });
});
