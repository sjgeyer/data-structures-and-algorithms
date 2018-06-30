'use strict';

import mostRepeatedPhrases from '../repeated-phrases';

describe('repeated phrases', () => {
  test('should return top 3 repeated phrases', () => {
    const input = 'Nory was a Catholic because her mother was a Catholic, and Nory’s mother was a Catholic because her father was a Catholic, and her father was a Catholic because his mother was a Catholic, or had been.';
    const result = mostRepeatedPhrases(input);
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(3);
    expect(result.includes('her father was')).toBe(true);
  });
  test('should return sorted array of top 10 repeated phrases', () => {
    const input = 'dog eats cat. dog eats cat. cat eats mouse. cat eats mouse. mouse eats cheese. mouse eats cheese. cheese is from cow. cheese is from cow. cow is from meadow. cow is from meadow. cow is from meadow. cow is from meadow. meadow is from earth. meadow is from earth. earth is from space. earth is from space. space is from nothing. space is from nothing. space is from nothing. nothing is from nowhere. nothing is from nowhere. nowhere is from everywhere. nowhere is from everywhere. i don\'t know another one. i don\'t know another one.';
    const result = mostRepeatedPhrases(input);
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(10);
    expect(result[0]).toEqual('cow is from meadow');
  });
  test('should err out on invalid input', () => {
    expect(() => mostRepeatedPhrases({})).toThrow('input must be a string');
  });
});
