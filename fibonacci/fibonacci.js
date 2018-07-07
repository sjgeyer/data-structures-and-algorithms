'use strict';

const printFibonacci = (n) => {
  if (typeof n !== 'number' || n < 1) throw new Error('invalid input. must input integer greater than 0');
  if (n === 1) return 0;
  if (n === 2) return 1;
  let firstValue = 0;
  let secondValue = 1;
  let sum;
  for (let i = 2; i < n; i++) {
    sum = firstValue + secondValue;
    firstValue = secondValue;
    secondValue = sum;
  }
  return secondValue;
};

const recursivePrintFib = (n) => {
  if (typeof n !== 'number' || n < 1) throw new Error('invalid input. must input integer greater than 0');
  const _calcFib = (firstValue, secondValue, number) => {
    if (number === n) return firstValue;
    return _calcFib(secondValue, firstValue + secondValue, number + 1);
  };
  return _calcFib(0, 1, 1);
};

export { printFibonacci, recursivePrintFib };
