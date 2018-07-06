'use strict';

const rotateMiddles = (matrix) => {
  let temp = matrix[1][2];
  matrix[1][2] = matrix[0][1]; // eslint-disable-line
  const secondTemp = matrix[2][1];
  matrix[2][1] = temp;
  temp = matrix[1][0]; // eslint-disable-line
  matrix[1][0] = secondTemp;
  matrix[0][1] = temp;
  return matrix;
};

const rotateCorners = (matrix) => {
  let temp = matrix[0][2];
  matrix[0][2] = matrix[0][0];  // eslint-disable-line
  const secondTemp = matrix[2][2];
  matrix[2][2] = temp;
  temp = matrix[2][0];  // eslint-disable-line
  matrix[2][0] = secondTemp;
  matrix[0][0] = temp;
  return matrix;
};

const rotate = (matrix) => {
  const height = matrix.length;
  const width = matrix[0].length;
  if (height !== 3) throw new Error('invalid input. matrix must be 9x9');
  if (width !== 3) throw new Error('invalid input. matrix must be 9x9');
  matrix = rotateMiddles(matrix); // eslint-disable-line
  matrix = rotateCorners(matrix); // eslint-disable-line
  return matrix;
};

const matrix = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];

console.log(rotate(matrix));

export default rotate;
