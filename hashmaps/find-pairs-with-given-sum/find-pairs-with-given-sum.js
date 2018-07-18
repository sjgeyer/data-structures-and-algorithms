'use strict';

const findPairs = (a, b, x) => {
  if (!Array.isArray(a) || !Array.isArray(b)) throw new Error('invalid data type');
  if (a.length < 1 || b.length < 1) throw new Error('invalid input. arrays must not be empty');
  if (!x) throw new Error('invalid input. must define x');
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
