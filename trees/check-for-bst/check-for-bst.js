'use strict';

const isBST = (tree) => {
  if (!tree || !tree.root) throw new Error('invalid input. tree must not be empty.');
  const values = [];
  const inOrderTraversal = (node) => {
    if (!node) return undefined;
    inOrderTraversal(node.left);
    values.push(node.value);
    inOrderTraversal(node.right);
    return undefined;
  };
  inOrderTraversal(tree.root);
  const comparisonValues = [...values].sort((a, b) => a - b);
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== comparisonValues[i]) return false;
  }
  return true;
};

export default isBST;
