'use strict';

import mergeTrees from '../merge-two-binary-trees';
import BinaryTree from '../../../data-structures/binary-tree/binary-tree';
import Node from '../../../data-structures/binary-tree/node';

describe('merge two binary trees', () => {
  test('should return merged trees', () => {
    const three = new Node(3, new Node(4), new Node(5));
    const tree1root = new Node(1, new Node(2), three);
    const tree1 = new BinaryTree(tree1root);

    const eight = new Node(8, null, new Node(10));
    const tree2root = new Node(6, new Node(7, new Node(9), new Node(1)), eight);
    const tree2 = new BinaryTree(tree2root);

    const result = mergeTrees(tree1, tree2);
    expect(result.root.value).toEqual(7);
    expect(result.root.left.value).toEqual(9);
    expect(result.root.left.left.value).toEqual(9);
    expect(result.root.left.right.value).toEqual(1);
    expect(result.root.right.value).toEqual(11);
    expect(result.root.right.left.value).toEqual(4);
    expect(result.root.right.right.value).toEqual(15);
  });
  test('should throw error if tree input is missing', () => {
    expect(() => mergeTrees('tree')).toThrow('must input two trees');
    expect(() => mergeTrees()).toThrow('must input two trees');
  });
  test('should throw error if either tree is empty', () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    expect(() => mergeTrees(tree1, tree2)).toThrow('invalid input. both trees must contain values');
  });
  test('should throw error if tree includes non-number data', () => {
    const tree1 = new BinaryTree(new Node('root'));
    const tree2 = new BinaryTree(new Node(2));
    expect(() => mergeTrees(tree1, tree2)).toThrow('invalid node value. trees must only contain numbers');
  });
});
