'use strict';

import Queue from '../queue-with-stacks';

describe('queue-with-stacks.test.js', () => {
  test('enqueue - should add new item to stack', () => {
    const test = new Queue();
    test.enqueue(1);
    expect(test._stackA._storage.head.value).toEqual(1);
    test.enqueue(2);
    expect(test._stackA._storage.head.next.value).toEqual(2);
    expect(test._stackA._storage.head.next.next).toBeNull();
  });
  test('dequeue - should remove last item from stack', () => {
    const test = new Queue();
    test.enqueue(1);
    test.enqueue(2);
    test.enqueue(3);
    expect(test.dequeue()).toEqual(1);
    expect(test.dequeue()).toEqual(2);
    expect(test.dequeue()).toEqual(3);
  });
});
