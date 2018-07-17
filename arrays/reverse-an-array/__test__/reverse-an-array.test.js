'use strict';

import reverseArray from '../reverse-an-array';

describe('reverse array', () => {
  test('should return reversed array', () => {
    expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  });
  test('should err out on invalid input', () => {
    expect(() => reverseArray('1, 2, 3, 4')).toThrow('input must be an array');
  });
});
