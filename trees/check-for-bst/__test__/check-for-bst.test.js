'use strict';

import isBST from '../check-for-bst';
import Node from '../../../data-structures/binary-tree/node';
import BinaryTree from '../../../data-structures/binary-tree/binary-tree';
import BinarySearchTree from '../../../data-structures/binary-search-tree/binary-search-tree';

describe('check for bst', () => {
  test('should return true for bst', () => {
    const tree = new BinarySearchTree(new Node(10));
    tree.insert(new Node(3));
    tree.insert(new Node(11));
    tree.insert(new Node(1));
    tree.insert(new Node(9));
    tree.insert(new Node(20));
    expect(isBST(tree)).toEqual(true);
  });
  test('should return false for non-bst', () => {
    const one = new Node(1, new Node(10), new Node(3));
    const tree = new BinaryTree(one);
    expect(isBST(tree)).toEqual(false);
  });
  test('should err out if tree is empty', () => {
    const tree = new BinaryTree();
    expect(() => isBST(tree)).toThrow('invalid input. tree must not be empty.');
  });
});
