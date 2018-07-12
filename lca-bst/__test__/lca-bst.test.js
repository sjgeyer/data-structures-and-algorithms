'use strict';

import BST from '../../data-structures/binary-search-tree/binary-search-tree';
import Node from '../../data-structures/binary-search-tree/node';
import lcaBST from '../lca-bst';

describe('lowest common ancestor - bst', () => {
  test('should return lowest common ancestor', () => {
    const bst = new BST(new Node(10));
    bst.insert(new Node(7));
    bst.insert(new Node(16));
    bst.insert(new Node(1));
    bst.insert(new Node(8));
    bst.insert(new Node(20));
    bst.insert(new Node(17));
    expect(lcaBST(bst, 1, 8)).toEqual(7);
    expect(lcaBST(bst, 1, 20)).toEqual(10);
    expect(lcaBST(bst, 17, 20)).toEqual(20);
  });
  test('should return values missing if looking for value that is not present in tree', () => {
    const bst = new BST(new Node(10));
    bst.insert(new Node(7));
    bst.insert(new Node(16));
    bst.insert(new Node(1));
    bst.insert(new Node(8));
    bst.insert(new Node(20));
    expect(lcaBST(bst, 1, 9)).toEqual('One or both values are not present in tree');
  });
  test('should throw error for invalid data types', () => {
    const bst = new BST(new Node(10));
    expect(() => lcaBST(bst, '1', '8')).toThrow('invalid input. values must be integers');
  });
  test('should throw error if tree is empty', () => {
    const bst = new BST();
    expect(() => lcaBST(bst, 1, 8)).toThrow('invalid input. tree must not be empty');
  });
});
