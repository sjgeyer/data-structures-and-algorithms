'use strict';

const compareTrees = (tree1, tree2) => {
  if (!tree1.root || !tree2.root) throw new Error('invalid input, trees must not be empty');
  const traversal = (node1, node2) => {
    if (!node1 || !node2) {
      return !((node1 && !node2) || (!node1 && node2));
    }
    if (node1.value !== node2.value) return false;
    const right = traversal(node1.right, node2.right);
    const left = traversal(node1.left, node2.left);
    return right && left;
  };
  return traversal(tree1.root, tree2.root);
};

export default compareTrees;
