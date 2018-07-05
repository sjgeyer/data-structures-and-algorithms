'use strict';

import MaxStack from '../max-stack';

describe('max stack', () => {
  test('should return maximum value with no manipulation', () => {
    const stack = new MaxStack();
    stack.push(1);
    stack.push(7);
    stack.push(2);
    stack.push(6);
    expect(stack.getMax()).toEqual(7);
  });
  test('should return maximum value with manipulation', () => {
    const stack = new MaxStack();
    stack.push(1);
    stack.push(7);
    stack.push(2);
    stack.push(8);
    stack.pop();
    expect(stack.getMax()).toEqual(7);
  });
  test('should return that stack is empty', () => {
    const stack = new MaxStack();
    expect(stack.getMax()).toEqual('stack is empty');
  });
});
