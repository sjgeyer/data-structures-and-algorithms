'use strict';

import LinkedList from '../../data-structures/linked-list/linked-list';

const llMerge = require('../ll-merge');

describe('testing llMerge function', () => {
  test('should return merged linked lists, lists equal value', () => {
    const list1 = new LinkedList();
    list1.push(1);
    list1.push(1);
    const list2 = new LinkedList();
    list2.push(2);
    list2.push(2);
    const testList = new LinkedList();
    testList.push(1);
    testList.push(2);
    testList.push(1);
    testList.push(2);
    expect(llMerge(list1, list2)).toEqual(testList);
  });
  test('should return merged linked lists, lists unequal value 2>1', () => {
    const list1 = new LinkedList();
    list1.push(1);
    list1.push(1);
    const list2 = new LinkedList();
    list2.push(2);
    list2.push(2);
    list2.push(2);
    const testList = new LinkedList();
    testList.push(1);
    testList.push(2);
    testList.push(1);
    testList.push(2);
    testList.push(2);
    expect(llMerge(list1, list2)).toEqual(testList);
  });
  test('should return merged linked lists, lists unequal value 1>2', () => {
    const list1 = new LinkedList();
    list1.push(1);
    list1.push(1);
    list1.push(1);
    const list2 = new LinkedList();
    list2.push(2);
    list2.push(2);
    const testList = new LinkedList();
    testList.push(1);
    testList.push(2);
    testList.push(1);
    testList.push(2);
    testList.push(1);
    expect(llMerge(list1, list2)).toEqual(testList);
  });
  test('should err out for empty list', () => {
    const list1 = new LinkedList();
    list1.push(1);
    const list2 = new LinkedList();
    expect(() => { llMerge(list1, list2); }).toThrow('Cannot merge empty list');
  });
});
