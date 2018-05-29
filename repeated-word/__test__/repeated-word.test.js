'use strict';

import repeatedWord from '../repeated-word';

describe('repeated-word.js', () => {
  test('should return first repeated word - short string', () => {
    const string = 'Once upon a time, there was a brave princess who...';
    expect(repeatedWord(string)).toBe('a');
  });
  test('should return first repeated word - long string', () => {
    const string = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    expect(repeatedWord(string)).toBe('it');
  });
  test('should return no matches found', () => {
    const string = 'A quick brown fox jumped over the lazy sleeping dog';
    expect(repeatedWord(string)).toBe('No matches found');
  });
  test('should err out if invalid input passed', () => {
    const badString = 483290;
    expect(() => { repeatedWord(badString); }).toThrow('invalid input type');
  });
});
