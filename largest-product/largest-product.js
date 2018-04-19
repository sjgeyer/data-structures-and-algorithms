'use strict';

const product = module.exports = {};

product.LargestProduct = (array) => {
  let currentMax = 0;
  let productU;
  let productR;
  let productD;
  let productL;
  let intermediateMax;
  let j = 0;
  const len = array.length;
  for (let i = 0; i < len; i++) {
    if (i !== 0 && array[i - 1][j]) productU = array[i][j] * array[i - 1][j]; // UP
    if (i !== len - 1 && array[i + 1][j]) productD = array[i][j] * array[i + 1][j]; // DOWN
    if (j !== 0 && array[i][j - 1]) productL = array[i][j] * array[i][j - 1]; // LEFT
    if (j !== array[i].length && array[i][j + 1]) productR = array[i][j] * array[i][j + 1]; // RIGHT
    intermediateMax = Math.max(productR, productD, productU, productL);
    if (intermediateMax > currentMax) currentMax = intermediateMax;
    j += 1;
    if (j < array[i].length) i -= 1;
    else { j = 0; }
  }
  return currentMax;
};
