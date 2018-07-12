'use strict';

const findValue = (subtree, value) => {
  if (!subtree) return false;
  if (subtree.value === value) return true;
  if (subtree.value > value) {
    return findValue(subtree.left, value);
  } else if (subtree.value < value) {
    return findValue(subtree.right, value);
  } 
  return false;
};

const lcaBST = (tree, value1, value2) => {
  if (!tree || !tree.root) throw new Error('invalid input. tree must not be empty');
  if (typeof value1 !== 'number' || typeof value2 !== 'number') throw new Error('invalid input. values must be integers');
  let prevAncestor = tree.root;
  let currentAncestor = tree.root;
  const checkValue = (node) => {
    if (!node) return currentAncestor;
    if (value1 < node.value && value2 < node.value) {
      return currentAncestor.left;
    } else if (value1 > node.value && value2 > node.value) {
      return currentAncestor.right;
    }
    return currentAncestor;
  };
  currentAncestor = checkValue(prevAncestor);
  while (prevAncestor !== currentAncestor) {
    prevAncestor = currentAncestor;
    currentAncestor = checkValue(prevAncestor);
  }
  const value1Present = findValue(currentAncestor, value1);
  const value2Present = findValue(currentAncestor, value2);
  if (!value1Present || !value2Present) {
    return 'One or both values are not present in tree';
  }
  return currentAncestor.value;
};

export default lcaBST;
