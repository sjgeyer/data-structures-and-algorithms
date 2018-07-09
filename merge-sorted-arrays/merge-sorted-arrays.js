'use strict';

const mergeTwoArrays = (array1, array2) => {
  let index1 = 0;
  let index2 = 0;
  const merged = [];
  while (array1[index1]) {
    if (array1[index1] < array2[index2]) {
      merged.push(array1[index1]);
      index1 += 1;
    } else {
      merged.push(array2[index2]);
      index2 += 1;
    }
  }
  return merged.concat(array2.slice(index2));
};

const mergeThreeArrays = (array1, array2, array3) => {
  if (!Array.isArray(array1) || !Array.isArray(array2) || !Array.isArray(array3)) {
    throw new Error('invalid input. arguments must be arrays');
  }
  if (array1.length < 1 || array2.length < 1 || array3.length < 1) {
    throw new Error('invalid input. arrays must not be empty');
  }
  return mergeTwoArrays(mergeTwoArrays(array1, array2), array3);
};

export default mergeThreeArrays;
