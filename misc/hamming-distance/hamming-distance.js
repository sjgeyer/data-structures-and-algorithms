'use strict';

const hammingDistance = (str1, str2) => {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') throw new Error('invalid input type');
  if (str1.length !== str2.length) throw new Error('invalid input. strings must be same length');
  let differences = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) differences += 1;
  }
  return differences;
};

export default hammingDistance;
