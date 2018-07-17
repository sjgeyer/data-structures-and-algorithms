'use strict';

import findNearestValue from '../nearest-value-bst';
import BinarySearchTree from '../../../data-structures/binary-search-tree/binary-search-tree';
import Node from '../../../data-structures/binary-search-tree/node';

describe('nearest value bst', () => {
  test('should return closest value to input integer', () => {
    const bst = new BinarySearchTree();
    bst.insert(new Node(10));
    bst.insert(new Node(3));
    bst.insert(new Node(16));
    bst.insert(new Node(2));
    bst.insert(new Node(5));
    bst.insert(new Node(20));
    expect(findNearestValue(bst, 17)).toEqual(16);
  });
  test('should err out if missing input', () => {
    expect(() => findNearestValue(17)).toThrow('invalid input, findNearestValue requires tree and integer arguments');
  });
  test('should err out if input value is not integer', () => {
    const bst = new BinarySearchTree();
    expect(() => findNearestValue(bst, 'ten')).toThrow('invalid input, second argument must be an integer');
  });
  test('should err out if tree is empty', () => {
    const bst = new BinarySearchTree();
    expect(() => findNearestValue(bst, 7)).toThrow('invalid input, tree must not be empty');
  });
});
