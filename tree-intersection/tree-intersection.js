'use strict';

const treeIntersection = (tree1, tree2) => {
  if (!tree1.root || !tree2.root) throw new Error('invalid input');
  const map = {};
  const commons = [];
  const traversal = (node, num) => {
    if (!node) return undefined;
    if (!map[node.value]) map[node.value] = num;
    if (map[node.value] && map[node.value] !== num) commons.push(node.value);
    traversal(node.left, num);
    traversal(node.right, num);
    return undefined;
  };
  traversal(tree1.root, 1);
  traversal(tree2.root, 2);
  if (commons.length < 1) return 'No intersections found';
  return commons;
};

export default treeIntersection;
