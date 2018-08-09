'use strict';

const mergeTrees = (tree1, tree2) => {
  if (!tree1 || !tree2) throw new Error('must input two trees');
  if (!tree1.root || !tree2.root) throw new Error('invalid input. both trees must contain values');

  const traversal = (node1, node2) => {
    if (typeof node1.value !== 'number' || typeof node2.value !== 'number') {
      throw new Error('invalid node value. trees must only contain numbers');
    }
    node1.value += node2.value;
    if (!node1.left || !node1.right) {
      if (!node1.left && node2.left) {
        node1.left = node2.left;
      }
      if (!node1.right && node2.right) {
        node1.right = node2.right;
      }
    } else {
      if (node1.left && node2.left) {
        traversal(node1.left, node2.left);
      }
      if (node1.right && node2.right) {
        traversal(node1.right, node2.right);
      }
    }
    return undefined;
  };
  traversal(tree1.root, tree2.root);
  return tree1;
};

export default mergeTrees;
