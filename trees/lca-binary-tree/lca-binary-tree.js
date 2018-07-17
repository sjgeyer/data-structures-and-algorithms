'use strict';

const isChild = (value, subtree) => {
  if (subtree.value === value) return true;
  if (!subtree.right && !subtree.left) return false;
  if (subtree.right.value === value || subtree.left.value === value) return true;
  return isChild(value, subtree.right) || isChild(value, subtree.left);
};

const findPath = (array, value, node) => {
  if (isChild(value, node)) array.push(node.value);
  if (node.right) findPath(array, value, node.right);
  if (node.left) findPath(array, value, node.left);
};

const lca = (tree, value1, value2) => {
  if (!tree.root) throw new Error('invalid input. tree must not be empty');
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('invalid input type. values must be numbers');
  }
  const path1 = [];
  const path2 = [];
  findPath(path1, value1, tree.root);
  findPath(path2, value2, tree.root);
  if (path1.length <= 1 && value1 !== tree.root.value) return `${value1} is not present in tree`;
  if (path2.length <= 1 && value2 !== tree.root.value) return `${value2} is not present in tree`;
  const len = Math.max(path1.length, path2.length);
  for (let i = 0; i < len; i++) {
    if (path1[i] !== path2[i]) return path1[i - 1];
  }
  return undefined;
};

export default lca;
