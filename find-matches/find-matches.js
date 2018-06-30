'use strict';

import Queue from 'queue-fifo';
import LinkedList from '../data-structures/linked-list/linked-list';

const FindMatches = (tree, input) => {
  if (!tree || !input) throw new Error('Required arguments missing');
  if (!tree.root) throw new Error('Cannot evaluate empty tree');
  const queue = new Queue();
  const matches = new LinkedList();
  queue.enqueue(tree.root);
  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue();
    if (currentNode.value === input) {
      matches.insertAtHead(currentNode);
    }
    currentNode.children.forEach(child => queue.enqueue(child));
  }
  if (!matches.head) return 'No matches found.';
  return matches;
};

export default FindMatches;
