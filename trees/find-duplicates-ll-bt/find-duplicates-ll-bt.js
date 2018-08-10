'use strict';

const findDuplicates = (tree, list) => {
  if (!tree || !list) throw new Error('missing input');
  if (!tree.root || !list.head) throw new Error('invalid input. neither tree not list not be empty');
  const collection = new Set();
  const map = {};
  const traverseTree = (node) => {
    if (!node) return undefined;
    if (!map[node.value]) map[node.value] = true;
    traverseTree(node.left);
    traverseTree(node.right);
    return undefined;
  };
  traverseTree(tree.root);
  let currentNode = list.head;
  while (currentNode) {
    if (map[currentNode.value]) collection.add(currentNode.value);
    currentNode = currentNode.next;
  }
  return collection;
};

export default findDuplicates;
