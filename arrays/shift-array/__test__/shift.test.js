'use strict';

import insertShiftArray from '../shift-array';

describe('shift.test.js', () => {
  test('Should return array with new number inserted at middle index', () => {
    expect(insertShiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
    expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
    expect(insertShiftArray([1, 3], 2)).toEqual([1, 2, 3]);
  });
});
