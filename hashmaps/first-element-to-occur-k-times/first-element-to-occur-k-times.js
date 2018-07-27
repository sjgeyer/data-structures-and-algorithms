'use strict';

const firstElementToOccurKTimes = (array, k) => {
  if (!array || !k) throw new Error('must input array and k value greater than 0');
  if (!Array.isArray(array) || typeof k !== 'number') throw new Error('invalid data type passed');
  if (array.length < 1) throw new Error('array must not be empty');
  if (k === 1) return array[0];
  const map = {};
  for (let i = 0; i < array.length; i++) {
    if (!map[array[i]]) map[array[i]] = 1;
    else map[array[i]] += 1;
    if (map[array[i]] === k) return array[i];
  }
  return -1;
};

export default firstElementToOccurKTimes;
