'use strict';

import minimumIndexedChar from '../minimum-indexed-character';

describe('minimum indexed character', () => {
  test('should return minimum indexed character', () => {
    expect(minimumIndexedChar('hello', 'there')).toEqual('e');
  });
  test('should return No character present if no characters present', () => {
    expect(minimumIndexedChar('hello', 'jim')).toEqual('No character present');
  });
  test('should throw error if invalid data types passed', () => {
    expect(() => minimumIndexedChar(['hello'], 'there')).toThrow('invalid data type. must enter strings');
  });
  test('should throw error if missing argument', () => {
    expect(() => minimumIndexedChar('one')).toThrow('must input two strings');
  });
});
