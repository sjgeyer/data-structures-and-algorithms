'use strict';

const printTriangle = (n) => {
  if (typeof n !== 'number') throw new Error('invalid input. input must be integer');
  if (n <= 0) throw new Error('invalid input. input must be integer greater than 0');
  if (n === 1) return [[1]];
  const triangle = [[1], [1, 1]];
  for (let i = 1; i < n - 1; i++) {
    const newLevel = [1];
    const lengthOfLastLevel = triangle[i].length;
    for (let j = 0; j < lengthOfLastLevel - 1; j++) {
      newLevel.push(triangle[i][j] + triangle[i][j + 1]);
    }
    newLevel.push(1);
    triangle.push(newLevel);
  }
  return triangle;
};

export default printTriangle;
