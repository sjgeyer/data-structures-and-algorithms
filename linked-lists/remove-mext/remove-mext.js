'use strict';

const findEndOfMext = (node) => {
  while (node.next) {
    node = node.next; // eslint-disable-line
  }
  return node;
};

const removeMext = (list) => {
  if (!list.head) throw new Error('invalid input. list must not be empty');
  let currentNode = list.head;
  while (currentNode) {
    if (currentNode.mext) {
      const temp = currentNode.next;
      currentNode.next = currentNode.mext;
      const endOfMext = findEndOfMext(currentNode.mext);
      endOfMext.next = temp;
      delete currentNode.mext;
    }
    currentNode = currentNode.next;
  }
  return list;
};

export default removeMext;
