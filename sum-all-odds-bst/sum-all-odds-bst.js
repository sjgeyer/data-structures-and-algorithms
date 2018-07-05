'use strict';

const sumAllOdds = (tree) => {
  if (!tree || !tree.root) throw new Error('invalid input. tree must not be empty');
  let sum = 0;
  const traversal = (node) => {
    if (!node) return undefined;
    if (node.value % 2 !== 0) sum += node.value;
    traversal(node.right);
    traversal(node.left);
    return undefined;
  };
  traversal(tree.root);
  return sum;
};

export default sumAllOdds;
