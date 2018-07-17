'use strict';

import LinkedList from '../../data-structures/linked-list/linked-list-with-tail';

export default class MaxStack {
  constructor() {
    this._storage = new LinkedList();
    this.maxValue = null;
  }

  push(value) {
    this._storage.push(value);
    if (value > this.maxValue) this.maxValue = value;
  }

  pop() {
    const popped = this._storage.pop();
    if (popped.value === this.maxValue) this.maxValue = this._findMax();
  }

  _findMax() {
    let currentMax = this._storage.head.value;
    let currentNode = this._storage.head;
    while (currentNode) {
      currentMax = Math.max(currentMax, currentNode.value);
      currentNode = currentNode.next;
    }
    return currentMax;
  }

  getMax() {
    if (!this.maxValue) return 'stack is empty';
    return this.maxValue;
  }
}
