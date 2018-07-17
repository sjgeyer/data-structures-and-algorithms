'use strict';

import Node from '../../data-structures/linked-list/node';

export default class LinkedList {
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

  insertBefore(value, newValue) {
    const node = new Node(newValue);
    if (this.head.value === value) {
      node.next = this.head;
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next.value !== value) {
      currentNode = currentNode.next;
      if (!currentNode.next && currentNode.value !== value) {
        throw new Error(`${value} does not exist in list`);
      }
    }
    node.next = currentNode.next;
    currentNode.next = node;
    return this;
  }

  insertAfter(value, newValue) {
    const node = new Node(newValue);
    let currentNode = this.head;
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
      if (!currentNode.next && currentNode.value !== value) {
        throw new Error(`${value} does not exist in list`);
      }
    }
    node.next = currentNode.next;
    currentNode.next = node;
    return this;
  }
}
