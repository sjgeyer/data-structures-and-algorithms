'use strict';

import findPairs from '../find-pairs-with-given-sum';

describe('find pairs with given sum', () => {
  test('should return all pairs', () => {
    const array1 = [1, 2, 4, 5, 7];
    const array2 = [5, 6, 3, 4, 8];
    const result = findPairs(array1, array2, 9);
    expect(result).toHaveLength(3);
  });
});
