'use strict';

const compareTreesIdentical = (tree1, tree2) => {
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

const compareTwoTreesValues = (tree1, tree2) => {
  if (!tree1.root || !tree2.root) throw new Error('invalid input, trees must not be empty');
  const values = [];
  let same = true;
  const traversal = (node, treeNum) => {
    if (!node) return undefined;
    if (treeNum === 1) {
      values.push(node.value);
    } else if (!values.includes(node.value)) {
      same = false;
    } else {
      values.splice(values.indexOf(node.value), 1);
    }
    traversal(node.right, treeNum);
    traversal(node.left, treeNum);
    return undefined;
  };
  traversal(tree1.root, 1);
  traversal(tree2.root, 2);
  if (values.length > 0) same = false;
  return same;
};

export { compareTreesIdentical, compareTwoTreesValues };
