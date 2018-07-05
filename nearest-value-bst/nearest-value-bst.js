'use strict';

const findNearestValue = (tree, value) => {
  if (!tree || !value) throw new Error('invalid input, findNearestValue requires tree and integer arguments');
  if (typeof value !== 'number') throw new Error('invalid input, second argument must be an integer');
  if (!tree.root) throw new Error('invalid input, tree must not be empty');
  let currentClosest = tree.root.value;
  let currentNode = tree.root;
  while (currentNode) {
    const currentClosestDif = Math.abs(value - currentClosest);
    const currentNodeDif = Math.abs(currentNode.value - value);
    if (currentNodeDif < currentClosestDif) currentClosest = currentNode.value;
    if (currentNode.value < value) currentNode = currentNode.right;
    else currentNode = currentNode.left;
  }
  return currentClosest;
};

export default findNearestValue;
