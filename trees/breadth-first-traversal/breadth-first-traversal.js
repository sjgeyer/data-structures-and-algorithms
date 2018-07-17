'use strict';

import Queue from '../../data-structures/queue';

const breadthFirstTraversal = (tree) => {
  const queue = new Queue();
  const valuesInOrder = [];
  queue.enqueue(tree.root);
  while (!queue.isEmpty()) {
    const current = queue.dequeue();
    if (current) {
      valuesInOrder.push(current.value);
      queue.enqueue(current.left);
      queue.enqueue(current.right);
    }
  }
  return valuesInOrder;
};

export default breadthFirstTraversal;
