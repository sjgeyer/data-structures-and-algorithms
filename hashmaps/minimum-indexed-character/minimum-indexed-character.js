'use strict';

const minimumIndexedChar = (str, patt) => {
  if (!str || !patt) throw new Error('must input two strings');
  if (typeof str !== 'string' || typeof patt !== 'string') throw new Error('invalid data type. must enter strings');
  const map = {};
  for (let i = 0; i < patt.length; i++) {
    const index = str.indexOf(patt[i]);
    if (index > 0 && !map[index]) map[index] = patt[i];
  }
  const minIndex = Object.keys(map).sort((a, b) => a - b)[0];
  if (!minIndex) return 'No character present';
  return map[minIndex];
};

export default minimumIndexedChar;
