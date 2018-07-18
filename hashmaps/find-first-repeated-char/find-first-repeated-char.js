'use strict';

const findFirstRepeatedChar = (string) => {
  if (typeof string !== 'string') throw new Error('invalid data type. input must be string');
  const map = {};
  string = string.replace(' ', ''); // eslint-disable-line
  for (let i = 0; i < string.length; i++) {
    if (map[string[i]]) return string[i];
    map[string[i]] = true;
  }
  return '';
};

export default findFirstRepeatedChar;
