'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  kthFromEnd(k) {
    if (!this.head) { throw new Error('List is empty'); }
    let currentNode = this.head;
    let length = 0;
    while (currentNode.next) {
      length += 1;
      currentNode = currentNode.next;
    }
    currentNode = this.head;
    const kth = length - k;
    if (kth < 0) { throw new Error('List is too short'); }
    for (let i = 0; i < kth; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
};
