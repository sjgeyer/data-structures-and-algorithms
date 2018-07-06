'use strict';

import LinkedList from '../../data-structures/linked-list/linked-list';
import Node from '../../data-structures/linked-list/node';
import removeMext from '../remove-mext';

describe('remove mext', () => {
  test('should return flattened list', () => {
    const list = new LinkedList(1);
    list.push(1);
    list.push(1);
    list.push(1);
    list.head.mext = new Node(2);
    list.head.next.mext = new Node(2);
    const result = removeMext(list);
    expect(result.head.next.value).toEqual(2);
    expect(result.head.next.next.value).toEqual(1);
    expect(result.head.next.next.next.value).toEqual(2);
    expect(result.head.next.next.next.next.value).toEqual(1);
    expect(result.head.next.next.next.next.next).toBeNull();
  });
  test('should return flattened list, long mext', () => {
    const list = new LinkedList(1);
    list.push(1);
    list.push(1);
    list.push(1);
    list.head.mext = new Node(2);
    list.head.mext.next = new Node(2);
    list.head.mext.next.next = new Node(2);
    const result = removeMext(list);
    expect(result.head.next.value).toEqual(2);
    expect(result.head.next.next.value).toEqual(2);
    expect(result.head.next.next.next.value).toEqual(2);
    expect(result.head.next.next.next.next.value).toEqual(1);
    expect(result.head.next.next.next.next.next.value).toEqual(1);
  });
  test('should throw error if list is empty', () => {
    const list = new LinkedList();
    expect(() => removeMext(list)).toThrow('invalid input. list must not be empty');
  });
});
