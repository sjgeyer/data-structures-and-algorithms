'use strict';

const LinkedList = require('../ll-kth-from-end');

describe('ll-kth-from-end.js', () => {
  test('Should return correct value', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    const test1 = list.kthFromEnd(0);
    const test2 = list.kthFromEnd(2);
    expect(test1.value).toEqual(4);
    expect(test2.value).toEqual(2);
  });
  test('Should err out for invalid inputs', () => {
    const list = new LinkedList();
    expect(() => { list.kthFromEnd(4); }).toThrow('List is empty');
    list.append(4);
    expect(() => { list.kthFromEnd(4); }).toThrow('List is too short');
  });
});
