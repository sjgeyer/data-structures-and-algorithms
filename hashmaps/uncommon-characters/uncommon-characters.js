'use strict';

const uncommonChars = (str1, str2) => {
  if (!str1 || !str2) throw new Error('must input two strings');
  if (typeof str1 !== 'string' || typeof str2 !== 'string') throw new Error('invalid data type. input must be strings');
  const map = {};
  for (let i = 0; i < str1.length; i++) {
    if (!map[str1[i]]) map[str1[i]] = 1;
  }
  for (let i = 0; i < str2.length; i++) {
    if (map[str2[i]]) map[str2[i]] += 1;
    else map[str2[i]] = 1;
  }
  let uniqueChars = '';
  Object.keys(map).map((key) => {
    if (map[key] < 2) uniqueChars += key;
    return undefined;
  });
  return uniqueChars;
};

export default uncommonChars;
