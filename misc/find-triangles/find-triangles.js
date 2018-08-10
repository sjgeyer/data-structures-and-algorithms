'use strict';

const findTriangles = (array) => {
  if (!array) throw new Error('missing input');
  if (!Array.isArray(array)) throw new Error('invalid input type. must input array');

  const triangles = [];
  const sortedArray = [...array].sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i++) {
    const remainingNumbers = sortedArray.slice(i + 1);

    for (let j = 0; j < remainingNumbers.length; j++) {
      const sumOfTwoSides = sortedArray[i] + remainingNumbers[j];

      // checking that are are any possible options remaining - if next number in remaining numbers
      // is larger than the sum already, the rest of the remaining numbers will also be invalid
      if (sumOfTwoSides > remainingNumbers[j + 1]) {
        // all third sides need to be at least one less than the sum of the other two sides
        let largestOption = remainingNumbers.indexOf(sumOfTwoSides) - 1;

        // establishing a new variable so sumOfTwoSides can be used in forEach down below
        let currentLowest = sumOfTwoSides;

        // if the actual sum of the numbers is not present, find the highest number remaining
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
