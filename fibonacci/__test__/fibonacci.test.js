'use strict';

import { printFibonacci, recursivePrintFib } from '../fibonacci';

describe('iterative fibonacci', () => {
  test('should return nth number in fibonacci sequence', () => {
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13];
    expect(printFibonacci(1)).toEqual(fibonacci[0]);
    expect(printFibonacci(2)).toEqual(fibonacci[1]);
    expect(printFibonacci(3)).toEqual(fibonacci[2]);
    expect(printFibonacci(4)).toEqual(fibonacci[3]);
    expect(printFibonacci(5)).toEqual(fibonacci[4]);
    expect(printFibonacci(6)).toEqual(fibonacci[5]);
  });
  test('should throw error for invalid integer', () => {
    expect(() => printFibonacci(-5)).toThrow('invalid input. must input integer greater than 0');
  });
  test('should throw error for invalid input type', () => {
    expect(() => printFibonacci('one')).toThrow('invalid input. must input integer greater than 0');
  });
});

describe('recursive fibonacci', () => {
  test('should return nth number in fibonacci sequence', () => {
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13];
    expect(recursivePrintFib(1)).toEqual(fibonacci[0]);
    expect(recursivePrintFib(2)).toEqual(fibonacci[1]);
    expect(recursivePrintFib(3)).toEqual(fibonacci[2]);
    expect(recursivePrintFib(4)).toEqual(fibonacci[3]);
    expect(recursivePrintFib(5)).toEqual(fibonacci[4]);
    expect(recursivePrintFib(6)).toEqual(fibonacci[5]);
  });
  test('should throw error for invalid integer', () => {
    expect(() => recursivePrintFib(-5)).toThrow('invalid input. must input integer greater than 0');
  });
  test('should throw error for invalid input type', () => {
    expect(() => recursivePrintFib('one')).toThrow('invalid input. must input integer greater than 0');
  });
});
