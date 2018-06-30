'use strict';

export default class Queue {
  constructor() {
    this._storage = [];
  }

  enqueue(value) {
    this._storage.push(value);
  }

  dequeue() {
    return this._storage.shift();
  }

  isEmpty() {
    return !this._storage.length > 0;
  }
}
