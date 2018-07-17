'use strict';

const missingNumber = (array) => {
  if (!Array.isArray(array)) throw new Error('invalid input. must input array.');
  for (let i = 1; i <= array.length; i++) {
    if (i !== array[i - 1]) return i;
  }
  return undefined;
};

export default missingNumber;
