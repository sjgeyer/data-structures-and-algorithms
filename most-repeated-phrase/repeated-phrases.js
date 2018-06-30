'use strict';

const parsePhrases = (array) => {
  const phrases = [];
  const len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 3; j <= len; j++) {
      const phrase = array.slice(i, j);
      if (phrase.length > 2 && phrase.length < 11) phrases.push(phrase.join(' ').toLowerCase());
    }
  }
  return phrases;
};

const cleanMap = (map) => {
  Object.keys(map).forEach((phrase) => {
    if (map[phrase] === 1) delete map[phrase];
    else {
      const splitPhrase = phrase.split(' ');
      const parsedPhrase = parsePhrases(splitPhrase);
      parsedPhrase.splice(parsedPhrase.indexOf(phrase), 1);
      if (parsedPhrase.length > 1) {
        for (let i = 0; i < parsedPhrase.length; i++) {
          if (map[parsedPhrase[i]]) delete map[parsedPhrase[i]];
        }
      }
    }
  });
  return map;
};

const mostRepeatedPhrases = (input) => {
  if (typeof input !== 'string') throw new Error('input must be a string');
  let map = {};
  const result = [];
  const sentences = input
    .replace(/["()]/g, '')
    .split(/[.!?,]/g)
    .filter(sentence => sentence !== '')
    .map(sentence => sentence.trim().split(' '));
  sentences.forEach((sentence) => {
    const phrases = parsePhrases(sentence);
    phrases.forEach((phrase) => {
      if (map[phrase]) map[phrase] += 1;
      else map[phrase] = 1;
    });
  });
  map = cleanMap(map);
  Object.keys(map).forEach((phrase) => {
    result.push({ phrase, repeated: map[phrase] });
  });
  result.sort((a, b) => {
    return b.repeated - a.repeated;
  });
  return result.slice(0, 10).map(key => key.phrase);
};

export default mostRepeatedPhrases;
