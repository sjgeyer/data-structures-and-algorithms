'use strict';

const leftJoin = (map1, map2) => {
  if (!map1 || !map2) throw new Error('must pass two maps');
  if (typeof map1 !== 'object' || typeof map2 !== 'object') throw new Error('arguments must be objects');
  const collection = [];
  for (const key in map1) { // eslint-disable-line
    if (Object.prototype.hasOwnProperty.call(map1, key)) {
      const antonym = map2[key] || null;
      collection.push([key, map1[key], antonym]);
    }
  }
  return collection;
};

export default leftJoin;
