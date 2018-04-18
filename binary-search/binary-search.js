'use strict';

const search = module.exports = {};

search.BinarySearch = (array, key) => {
  let result = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      result = i;
      return result;
    }
  }
  return result;
};
