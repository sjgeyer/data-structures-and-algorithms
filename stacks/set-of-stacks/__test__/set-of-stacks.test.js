'use strict';

import SetOfStacks from '../set-of-stacks';

describe('set of stacks', () => {
  const stack = new SetOfStacks();
  test('PUSH - should have second stack if first stacks is more than 10 long', () => {
    for (let i = 0; i < 10; i++) {
      stack.push(1);
    }
    for (let i = 0; i < 10; i++) {
      stack.push(2);
    }
    stack.push(3);
    expect(stack._stacks[0]).toHaveLength(10);
    expect(stack._stacks[1]).toHaveLength(10);
    expect(stack._stacks[2]).toHaveLength(1);
  });
  test('POP - should return popped value without index passed', () => {
    const popped = stack.pop();
    stack.pop();
    const poppedFromFirst = stack.pop(0);
    const poppedFromSecond = stack.pop(1);
    expect(popped).toEqual(3);
    expect(poppedFromFirst).toEqual(1);
    expect(poppedFromSecond).toEqual(2);
    expect(stack._stacks[0]).toHaveLength(9);
    expect(stack._stacks[1]).toHaveLength(8);
    expect(stack._stacks[2]).toHaveLength(0);
  });
  test('PUSH - should err out if value is not defined', () => {
    stack.push(0);
    expect(() => stack.push()).toThrow('invalid input. value must be defined');
  });
});
