'use strict';

const findPairs = (a, b, x) => {
  const map = {};
  map[x] = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] + b[j] === x) map[x].push([a[i], b[j]]);
    }
  }
  return map[x];
};

export default findPairs;
