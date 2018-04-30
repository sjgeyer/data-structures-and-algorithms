'use strict';

import LinkedList from './linked-list';

class Stack {
  constructor() {
    this._storage = new LinkedList();
  }

  push(value) {
    this._storage.push(value);
    return this;
  }

  pop() {
    return this._storage.pop().value;
  }

  peek() {
    if (!this._storage.tail) throw new Error('List is empty');
    return this._storage.tail;
  }

  isEmpty() {
    return !this._storage.head;
  }
}

export default Stack;
