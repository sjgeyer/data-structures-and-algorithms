'use strict';

const findUniqueInArray = (array) => {
  if (!Array.isArray(array)) throw new Error('invalid input. input must be an array');
  for (let i = 0; i < array.length; i++) {
    const before = array[i - 1];
    const after = array[i + 1];
    if (array[i] !== before && array[i] !== after) return array[i];
  }
  return 'No unique values in array';
};

export default findUniqueInArray;
