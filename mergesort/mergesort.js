'use strict';

const merge = (leftArr, rightArr) => {
  const merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (rightArr[rightIndex] < leftArr[leftIndex]) {
      merged.push(rightArr[rightIndex]);
      rightIndex += 1;
    } else {
      merged.push(leftArr[leftIndex]);
      leftIndex += 1;
    }
  }
  return merged.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
};

const mergeSort = (array) => {
  if (!array) throw new Error('missing input');
  if (array.length < 1) throw new Error('array is empty');
  if (array.length === 1) return array;
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

export default mergeSort;
