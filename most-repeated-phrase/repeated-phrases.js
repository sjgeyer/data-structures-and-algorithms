
const parsePhrases = (array) => {
  const phrases = [];
  const len = array.length;
  for (let i = 0; i < len - 2; i++) {
    const phraseLength = Math.min(len, 10);
    for (let j = 3; j <= phraseLength; j++) {
      const phrase = array.slice(i, j);
      if (phrase.length >= 3) phrases.push(phrase.join(' ').toLowerCase());
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
  let map = {};
  const result = [];
  const sentences = input
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

// --------------------------- TEST CASES ----------------------------
// given test
const testInput = 'The quick brown fox jumped over the lazy dog. The lazy dog, peeved to be labeled lazy, jumped over a snoring turtle. In retaliation the quick brown fox jumped over ten snoring turtles. Then the quick brown fox refueled with some ice cream.';

// random repetitive phrase found online
const testInput2 = 'Nory was a Catholic because her mother was a Catholic, and Nory’s mother was a Catholic because her father was a Catholic, and her father was a Catholic because his mother was a Catholic, or had been.';

// testing for top 10/sorting
const testInput3 = 'dog eats cat. dog eats cat. cat eats mouse. cat eats mouse. mouse eats cheese. mouse eats cheese. cheese is from cow. cheese is from cow. cow is from meadow. cow is from meadow. cow is from meadow. cow is from meadow. meadow is from earth. meadow is from earth. earth is from space. earth is from space. space is from nothing. space is from nothing. space is from nothing. nothing is from nowhere. nothing is from nowhere. nowhere is from everywhere. nowhere is from everywhere. i don\'t know another one. i don\'t know another one.';

const testInput4 = '';

console.log(mostRepeatedPhrases(testInput));

console.log(mostRepeatedPhrases(testInput2));

console.log(mostRepeatedPhrases(testInput3));

console.log(mostRepeatedPhrases(testInput4));
