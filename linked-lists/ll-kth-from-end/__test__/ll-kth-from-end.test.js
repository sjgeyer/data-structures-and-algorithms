'use strict';

import LinkedListKth from '../ll-kth-from-end';

describe('ll-kth-from-end.js', () => {
  test('Should return correct value', () => {
    const list = new LinkedListKth();
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    const test1 = list.kthFromEnd(0);
    const test2 = list.kthFromEnd(2);
    expect(test1.value).toEqual(4);
    expect(test2.value).toEqual(2);
  });
  test('Should err out for invalid inputs', () => {
    const list = new LinkedListKth();
    expect(() => { list.kthFromEnd(4); }).toThrow('List is empty');
    list.push(4);
    expect(() => { list.kthFromEnd(4); }).toThrow('List is too short');
  });
});
