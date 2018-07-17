'use strict';

import LinkedList from '../../../data-structures/linked-list/linked-list';
import reverseLL from '../ll-reverse';

describe('reverse linked list', () => {
  test('should return reversed linked list', () => {
    const list = new LinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    const result = reverseLL(list);
    expect(result.value).toEqual(4);
    expect(result.next.value).toEqual(3);
    expect(result.next.next.value).toEqual(2);
    expect(result.next.next.next.value).toEqual(1);
  });
  test('should err out if list is empty', () => {
    const list = new LinkedList();
    expect(() => reverseLL(list)).toThrow('invalid input. list must not be empty');
  });
  test('should err out if no list passed', () => {
    expect(() => reverseLL()).toThrow('missing input');
  });
});
