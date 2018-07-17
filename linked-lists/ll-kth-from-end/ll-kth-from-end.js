'use strict';

import LinkedList from '../../data-structures/linked-list/linked-list';

export default class LinkedListKth extends LinkedList {
  constructor(props) {
    super(props);
    this.head = null;
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
}
