'use strict';

import BinaryTree from '../../../data-structures/binary-tree/binary-tree';
import Node from '../../../data-structures/binary-tree/node';
import findMaximumValue from '../find-maximum-value';

describe('find-maximum-value', () => {
  test('should return maximum value - 5', () => {
    const three = new Node(3, new Node(4), new Node(5));
    const one = new Node(1, new Node(2), three);
    const tree = new BinaryTree(one);
    expect(findMaximumValue(tree)).toEqual(5);
  });
  test('should return maximum value - 8', () => {
    const two = new Node(2, new Node(8));
    const three = new Node(3, two, new Node(4));
    const tree = new BinaryTree(three);
    expect(findMaximumValue(tree)).toEqual(8);
  });
  test('should return null when passed empty tree', () => {
    const tree = new BinaryTree();
    expect(findMaximumValue(tree)).toBeNull();
  });
});
