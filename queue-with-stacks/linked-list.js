'use strict';

import Node from './node';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.tail = node;
    return this;
  }

  pop() {
    if (!this.head) {
      throw new Error('Cannot remove item from empty list');
    }
    let poppedValue;
    if (!this.head.next) {
      poppedValue = this.head;
      this.head = null;
      this.tail = null;
      return poppedValue;
    }
    let currentNode = this.head;
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    poppedValue = currentNode.next;
    this.tail = currentNode;
    currentNode.next = null;
    return poppedValue;
  }
}

export default LinkedList;
