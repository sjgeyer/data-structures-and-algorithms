'use strict';

import leftJoin from '../left-join';

describe('left-join.js', () => {
  test('should return array of arrays of values', () => {
    const map1 = {
      word: 'synonym',
      otherWord: 'otherSynonym',
    };
    const map2 = {
      word: 'antonym',
      wordNotInOtherMap: 'somethingElse',
    };
    expect(leftJoin(map1, map2)).toEqual([['word', 'synonym', 'antonym'], ['otherWord', 'otherSynonym', null]]);
  });
  test('should throw error if missing inputs', () => {
    const map1 = {
      word: 'synonym',
      otherWord: 'otherSynonym',
    };
    expect(() => { leftJoin(map1); }).toThrow('must pass two maps');
  });
  test('should throw error invalid argument types', () => {
    const map1 = {
      word: 'synonym',
      otherWord: 'otherSynonym',
    };
    const map2 = 'I\'m a map';
    expect(() => { leftJoin(map1, map2); }).toThrow('arguments must be objects');
  });
});
