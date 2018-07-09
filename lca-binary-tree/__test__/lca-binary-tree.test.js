'use strict';

import lca from '../lca-binary-tree';
import BinaryTree from '../../data-structures/binary-tree/binary-tree';
import Node from '../../data-structures/binary-tree/node';

describe('find lowest common ancestor in binary tree', () => {
  test('should return lowest common ancestor', () => {
    const one = new Node(1);
    const two = new Node(2);
    two.left = new Node(4);
    two.right = new Node(5);
    const three = new Node(3);
    three.left = new Node(6);
    three.right = new Node(7);
    one.left = two;
    one.right = three;
    const tree = new BinaryTree(one);
    expect(lca(tree, 6, 7)).toEqual(3);
    expect(lca(tree, 4, 7)).toEqual(1);
    expect(lca(tree, 3, 6)).toEqual(3);
    expect(lca(tree, 1, 4)).toEqual(1);
  });
  test('should return value not in tree - value 1', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    one.left = two;
    one.right = three;
    const tree = new BinaryTree(one);
    expect(lca(tree, 6, 2)).toEqual('6 is not present in tree');
  });
  test('should return value not in tree - value 2', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    one.left = two;
    one.right = three;
    const tree = new BinaryTree(one);
    expect(lca(tree, 2, 6)).toEqual('6 is not present in tree');
  });
  test('should err if invalid data type passed', () => {
    const tree = new BinaryTree(new Node(1));
    expect(() => lca(tree, 'one', 1)).toThrow('invalid input type. values must be numbers');
  });
});
