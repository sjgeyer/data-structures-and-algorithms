'use strict';

import mostRepeatedPhrases from '../repeated-phrases';

describe('repeated phrases', () => {
  test('should return top 3 repeated phrases', () => {
    const input = 'Nory was a Catholic because her mother was a Catholic, and Nory’s mother was a Catholic because her father was a Catholic, and her father was a Catholic because his mother was a Catholic, or had been.';
    const result = mostRepeatedPhrases(input);
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(3);
    expect(result.includes('her father was a catholic')).toBe(true);
  });
  test('should return sorted array of top 10 repeated phrases', () => {
    const input = 'dog eats cat. dog eats cat. cat eats mouse. cat eats mouse. mouse eats cheese. mouse eats cheese. cheese is from cow. cheese is from cow. cow is from meadow. cow is from meadow. cow is from meadow. cow is from meadow. meadow is from earth. meadow is from earth. earth is from space. earth is from space. space is from nothing. space is from nothing. space is from nothing. nothing is from nowhere. nothing is from nowhere. nowhere is from everywhere. nowhere is from everywhere. i don\'t know another one. i don\'t know another one.';
    const result = mostRepeatedPhrases(input);
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(10);
    expect(result[0]).toEqual('cow is from meadow');
  });
  test('borrowing test suite from dan', () => {
    const testString = 'The "quick brown fox" jumped over the lazy dog, nobody knows why. The lazy dog, peeved to be labeled lazy (nobody knows why either), jumped over a snoring turtle and nobody knows why the dog would do that. After jumping the turtle the dog howled all night. Why do animals jump others? Why do some animals howl all night? Nobody knows why. In retaliation the "quick brown fox jumped over" ten snoring turtles, again, nobody knows why. Why were there turtles? Nobody knows why. Then the quick brown fox refueled with some icecream, nobody knows why. The "quick brown fox" jumped over them turtles, again, nobody knows why. The quick brown fox jumped over a fuzzy bear that slept all winter, nobody knows why, as did the lazy dog. In the sunny summer, The dolphin swam all summer, yet again, nobody knows why, the quick brown fox jumped over dolphins in the sunny summer. The crickets chirped all sunny summer and who slept all winter and swam all summer? While the crickets chirped all sunny summer the turtles had slept all winter. The Monkey howled all night, the wolves howled all night, and bigfoot howled all night! The fuzzy bear slept all winter but not all summer. The crickets chirped all sunny summer but not all winter. The huskys sledded all winter but not all summer. The dolphin swam all summer but not all winter.';
    const result = mostRepeatedPhrases(testString);
    expect(result.includes('nobody knows why')).toBeTruthy();
    expect(result.includes('the quick brown fox jumped over')).toBeTruthy();
    expect(result.includes('slept all winter')).toBeTruthy();
    expect(result.includes('howled all night')).toBeTruthy();
    expect(result.includes('the lazy dog')).toBeTruthy();
    expect(result.includes('the crickets chirped all sunny summer')).toBeTruthy();
  });
  test('Should return an empty array if no repeated phrases', () => {
    const input = 'The quick brown fox jumped over the lazy dog. This test string will have no repeating phrases.';
    expect(mostRepeatedPhrases(input)).toEqual([]);
  });
  test('should err out on invalid input', () => {
    expect(() => mostRepeatedPhrases({})).toThrow('input must be a string');
  });
});
