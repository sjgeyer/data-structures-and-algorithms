'use strict';

import findFirstRepeatedChar from '../find-first-repeated-char';

describe('find first repeated char', () => {
  test('should return first repeated character', () => {
    expect(findFirstRepeatedChar('hello world')).toEqual('l');
    expect(findFirstRepeatedChar('why hello there')).toEqual('h');
  });
  test('should return an empty string if no repeated characters present', () => {
    expect(findFirstRepeatedChar('abcdefg')).toEqual('');
  });
  test('should throw err if invalid data type passed', () => {
    expect(() => findFirstRepeatedChar({})).toThrow('invalid data type. input must be string');
  });
});
