'use strict';

import LinkedList from '../ll-insertions';

describe('ll-insertions.js', () => {
  test('#append', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next).toBeNull();
  });

  test('#insertBefore', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.insertBefore(2, 3);
    list.insertBefore(1, 6);
    expect(list.head.value).toEqual(6);
    expect(list.head.next.next.value).toEqual(3);
    expect(() => { list.insertBefore(4, 5); }).toThrow('4 does not exist in list');
  });

  test('#insertAfter', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.insertAfter(2, 3);
    list.insertAfter(1, 6);
    expect(list.head.next.value).toEqual(6);
    expect(list.head.next.next.next.value).toEqual(3);
    expect(() => { list.insertAfter(4, 5); }).toThrow('4 does not exist in list');
  });
});
