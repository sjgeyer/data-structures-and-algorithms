'use strict';

const insertShiftArray = (array, num) => {
  const middle = Math.ceil(array.length / 2);
  let prev;
  let next = num;
  const len = array.length;
  for (let i = middle; i <= len; i++) {
    prev = array[i];
    array[i] = next;
    next = prev;
  }
  return array;
};

export default insertShiftArray;
