'use strict';

import Stack from '../../data-structures/stack';

class Queue {
  constructor() {
    this._stackA = new Stack();
    this._stackB = new Stack();
  }

  enqueue(value) {
    this._stackA.push(value);
  }

  dequeue() {
    if (this._stackB._storage.head) return this._stackB.pop();
    while (this._stackA._storage.head) {
      this._stackB.push(this._stackA.pop());
    }
    return this._stackB.pop();
  }
}

export default Queue;

