'use strict';

import treeIntersection from '../tree-intersection';
import BinaryTree from '../binary-tree';
import Node from '../node';

describe('tree-intersection.js', () => {
  test('should return array of common values, no dupes on single tree', () => {
    const root1 = new Node(1, new Node(2), new Node(3));
    const tree1 = new BinaryTree(root1);
    const root2 = new Node(3, new Node(1), new Node(6));
    const tree2 = new BinaryTree(root2);
    expect(treeIntersection(tree1, tree2)).toEqual([3, 1]);
  });
  test('should return array of common values with duplicates on tree', () => {
    const root1 = new Node(1, new Node(1), new Node(3));
    const tree1 = new BinaryTree(root1);
    const root2 = new Node(3, new Node(1), new Node(6));
    const tree2 = new BinaryTree(root2);
    expect(treeIntersection(tree1, tree2)).toEqual([3, 1]);
  });
  test('should return no intersections found', () => {
    const root1 = new Node(1, new Node(2), new Node(3));
    const tree1 = new BinaryTree(root1);
    const root2 = new Node(4, new Node(5), new Node(6));
    const tree2 = new BinaryTree(root2);
    expect(treeIntersection(tree1, tree2)).toEqual('No intersections found');
  });
  test('should err out for invalid input', () => {
    const root1 = new Node(1, new Node(2), new Node(3));
    const tree1 = new BinaryTree(root1);
    const tree2 = new BinaryTree();
    expect(() => { treeIntersection(tree1, tree2); }).toThrow('invalid input');
  });
});
