'use strict';

import BinaryTree from '../../../data-structures/binary-tree/binary-tree';
import Node from '../../../data-structures/binary-tree/node';
import countFiles from '../count-files';

describe('count files', () => {
  test('should return number of leaves on tree - simple tree', () => {
    const root = new Node(1, new Node(1), new Node(1));
    const tree = new BinaryTree(root);
    expect(countFiles(tree)).toEqual(2);
  });
  test('should return number of leaves on tree - complex tree', () => {
    const right = new Node(1, new Node(1), new Node(1));
    const left = new Node(1, null, new Node(1));
    const root = new Node(1, left, right);
    const tree = new BinaryTree(root);
    expect(countFiles(tree)).toEqual(3);
  });
  test('should throw error if tree is empty', () => {
    expect(() => countFiles(new BinaryTree())).toThrow('input must be a non-empty tree');
  });
});
