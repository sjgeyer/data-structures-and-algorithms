'use strict';

import findDuplicates from '../find-duplicates-ll-bt';
import LinkedList from '../../../data-structures/linked-list/linked-list';
import BinaryTree from '../../../data-structures/binary-tree/binary-tree';
import Node from '../../../data-structures/binary-tree/node';

describe('find duplicates in linked list and binary tree', () => {
  test('should return collection of shared values', () => {
    const list = new LinkedList();
    list.push(7);
    list.push(6);
    list.push(5);
    list.push(4);
    const three = new Node(3, new Node(4), new Node(5));
    const root = new Node(1, new Node(2), three);
    const tree = new BinaryTree(root);
    const result = findDuplicates(tree, list);

    expect(result.has(5)).toBe(true);
    expect(result.has(4)).toBe(true);
    expect(result.has(7)).toBe(false);
    expect(result.has(6)).toBe(false);
  });
  test('should throw error if input is missing', () => {
    const tree = new BinaryTree();
    expect(() => findDuplicates(tree)).toThrow('missing input');
  });
  test('should throw error if list or tree is empty', () => {
    const tree = new BinaryTree();
    const list = new LinkedList();
    expect(() => findDuplicates(tree, list)).toThrow('invalid input. neither tree not list not be empty');
  });
});
