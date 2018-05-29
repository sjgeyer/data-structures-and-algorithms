'use strict';

const repeatedWord = (string) => {
  if (typeof string !== 'string') throw new Error('invalid input type');
  const hashMap = {};
  const words = string.toLowerCase().replace(/[^\w\s]/g, '').split(' ');
  let repeated = 'No matches found';
  words.forEach((word) => {
    if (hashMap[word] && repeated === 'No matches found') repeated = word;
    hashMap[word] = true;
  });
  return repeated;
};

export default repeatedWord;
