'use strict';

const _sortByIndex = (index, array) => {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    const placeValue = array[i][array[i].length - index - 1] || 0;
    if (obj[placeValue]) {
      obj[placeValue].push(array[i]);
    } else {
      obj[placeValue] = [array[i]];
    }
  }
  let returnArray = [];
  Object.keys(obj).forEach(key => returnArray = returnArray.concat(obj[key])); // eslint-disable-line
  return returnArray;
};

const radixSort = (array) => {
  if (!Array.isArray(array)) throw new Error('invalid input. must input array');
  if (array.length < 1) throw new Error('invalid input. cannot sort empty array');
  array = array.map(x => x.toString()); // eslint-disable-line
  const max = Math.max(...array).toString().length;
  for (let i = 0; i < max; i++) {
    array = _sortByIndex(i, array); // eslint-disable-line
  }
  return array.map(x => Number(x));
};

export default radixSort;
