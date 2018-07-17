'use strict';

const findMaxValue = (tree) => {
  if (!tree.root) return null;
  let currentMax = tree.root.value;
  const preOrderTraversal = (node) => {
    if (!node) return undefined;
    currentMax = Math.max(currentMax, node.value);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
    return undefined;
  };
  preOrderTraversal(tree.root);
  return currentMax;
};

export default findMaxValue;
