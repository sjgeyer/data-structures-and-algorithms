'use strict';

const reverseLL = (list) => {
  if (!list) throw new Error('missing input');
  if (!list.head) throw new Error('invalid input. list must not be empty');
  let prevNode = null;
  let currentNode = list.head;
  let nextNode = null;
  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  return prevNode;
};

export default reverseLL;
