'use strict';

const BinarySearch = (array, key) => {
  let middle;
  let index = 0;
  while (array.length > 0) {
    if (array.length === 1 && array[0] !== key) return -1;
    middle = Math.floor(array.length / 2);
    index += middle;
    if (array[middle] === key) return index;
    else if (array[middle] > key) {
      index -= middle;
      array = array.slice(0, middle); // eslint-disable-line
    } else array = array.slice(middle); // eslint-disable-line
  }
  return undefined;
};

export default BinarySearch;
