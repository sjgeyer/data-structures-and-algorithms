'use strict';

import BinaryTree from '../../data-structures/binary-tree/binary-tree';
import Node from '../../data-structures/binary-tree/node';
import compareTrees from '../compare-two-trees';

describe('compare two binary trees', () => {
  test('should return true if trees are same', () => {
    const one = new Node(1);
    one.right = new Node(3);
    const two = new Node(2);
    two.left = new Node(4);
    two.right = new Node(5);
    one.left = two;
    const tree1 = new BinaryTree(one);
    const tree2 = new BinaryTree(one);
    expect(compareTrees(tree1, tree2)).toEqual(true);
  });
  test('should return false if trees are different', () => {
    const one = new Node(1);
    one.right = new Node(3);
    const two = new Node(2);
    two.left = new Node(4);
    two.right = new Node(5);
    one.left = two;
    const tree1 = new BinaryTree(one);
    const tree2 = new BinaryTree(two);
    expect(compareTrees(tree1, tree2)).toEqual(false);
  });
  test('should err if trees are empty', () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    expect(() => compareTrees(tree1, tree2)).toThrow('invalid input, trees must not be empty');
  });
});
