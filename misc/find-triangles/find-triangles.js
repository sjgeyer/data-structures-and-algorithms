'use strict';

const findTriangles = (array) => {
  if (!array) throw new Error('must input array');
  if (!Array.isArray(array)) throw new Error('invalid input type. must input array');

  const triangles = [];
  const sortedArray = [...array].sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i++) {
    const remainingNumbers = sortedArray.slice(i + 1);

    for (let j = 0; j < remainingNumbers.length; j++) {
      const sumOfTwoSides = sortedArray[i] + remainingNumbers[j];

      // checking that are are any possible options remaining
      if (sumOfTwoSides > remainingNumbers[j + 1]) {
        let largestOption = remainingNumbers.indexOf(sumOfTwoSides) - 1;
        let currentLowest = sumOfTwoSides;
        while (largestOption < 0) {
          currentLowest -= 1; // TODO: stop decrementing SUM
          largestOption = remainingNumbers.indexOf(currentLowest);
        }
        remainingNumbers.slice(j + 1).forEach((num) => {
          if (num < sumOfTwoSides) {
            triangles.push([sortedArray[i], remainingNumbers[j], num]);
          }
        });
      }
    }
  }

  return triangles;
};

export default findTriangles;

console.log(findTriangles([3, 4, 6, 7]));
