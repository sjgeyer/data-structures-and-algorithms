'use strict';

const quickSort = (array) => {
  if (!array) throw new Error('missing input');
  if (array.length <= 1) return array;
  const lesser = [];
  const greater = [];
  const pivot = array.pop();
  if (typeof pivot !== 'number') throw new Error('array must only contain integers');
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') throw new Error('array must only contain integers');
    if (array[i] <= pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [].concat(quickSort(lesser), pivot, quickSort(greater));
};

export default quickSort;
