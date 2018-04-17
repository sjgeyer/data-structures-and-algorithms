'use strict';

const shift = module.exports = {};

shift.insertShiftArray = (array, num) => {
  const index = Math.ceil(array.length / 2);
  const newArray = [];
  for (let i = 0; i < array.length + 1; i++) {
    if (i < index) {
      newArray[i] = array[i];
    } else if (i === index) {
      newArray[i] = num;
    } else {
      newArray[i] = array[i - 1];
    }
  }
  return newArray;
};
