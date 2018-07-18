'use strict';

import uncommonChars from '../uncommon-characters';

describe('uncommon characters', () => {
  test('should return uncommon characters', () => {
    const result = uncommonChars('character', 'alphabet').split('');
    expect(result.includes('c')).toEqual(true);
    expect(result.includes('r')).toEqual(true);
    expect(result.includes('l')).toEqual(true);
    expect(result.includes('p')).toEqual(true);
    expect(result.includes('b')).toEqual(true);
  });
  test('should return empty string if no unique characters', () => {
    expect(uncommonChars('set', 'set')).toEqual('');
  });
  test('should throw error if invalid data type passed', () => {
    expect(() => uncommonChars({}, 'test')).toThrow('invalid data type. input must be strings');
  });
  test('should throw error if invalid number of arguments', () => {
    expect(() => uncommonChars()).toThrow('must input two strings');
  });
});
