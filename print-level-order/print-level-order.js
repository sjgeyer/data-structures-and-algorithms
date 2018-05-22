'use strict';

import Queue from 'queue-fifo';

const PrintLevelOrder = (tree) => {
  if (!tree) throw new Error('Missing input');
  if (!tree.root) throw new Error('Cannot print empty tree');
  let output = '';
  const queue = new Queue();
  queue.enqueue({ node: tree.root, level: 1 });
  while (!queue.isEmpty()) {
    const removed = queue.dequeue();
    removed.node.children.forEach((child) => {
      queue.enqueue({ node: child, level: removed.level + 1 });
    });
    if (!queue.isEmpty() && queue.peek().level === removed.level) {
      output += removed.node.value;
    } else {
      output += `${removed.node.value}\n`;
    }
  }
  return output;
};

export default PrintLevelOrder;
