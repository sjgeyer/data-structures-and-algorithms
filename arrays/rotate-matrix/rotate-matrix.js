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
  if (height !== 3) throw new Error('invalid input. matrix must be 9x9');
  const width1 = matrix[0].length;
  const width2 = matrix[0].length;
  const width3 = matrix[0].length;
  if (width1 !== 3 || width2 !== 3 || width3 !== 3) throw new Error('invalid input. matrix must be 9x9');
  matrix = rotateMiddles(matrix); // eslint-disable-line
  matrix = rotateCorners(matrix); // eslint-disable-line
  return matrix;
};

export default rotate;
