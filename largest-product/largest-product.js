'use strict';

const product = module.exports = {};

product.LargestProduct = (array) => {
  let currentMax = 0;
  let productR;
  let productD;
  let intermediateMax;
  let j = 0;
  const len = array.length;
  for (let i = 0; i < len; i++) {
    if (i !== len - 1) productD = array[i][j] * array[i + 1][j]; // DOWN
    if (j !== array[i].length) productR = array[i][j] * array[i][j + 1]; // RIGHT
    intermediateMax = Math.max(productR, productD);
    if (intermediateMax > currentMax) currentMax = intermediateMax;
    j += 1;
    if (j < array[i].length) i -= 1;
    else { j = 0; }
  }
  return currentMax;
};
