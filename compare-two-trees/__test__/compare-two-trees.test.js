'use strict';

import BinaryTree from '../../data-structures/binary-tree/binary-tree';
import Node from '../../data-structures/binary-tree/node';
import { compareTwoTreesValues, compareTreesIdentical } from '../compare-two-trees';

describe('compare two identical binary trees', () => {
  test('should return true if trees are same', () => {
    const one = new Node(1);
    one.right = new Node(3);
    const two = new Node(2);
    two.left = new Node(4);
    two.right = new Node(5);
    one.left = two;
    const tree1 = new BinaryTree(one);
    const tree2 = new BinaryTree(one);
    expect(compareTreesIdentical(tree1, tree2)).toEqual(true);
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
    expect(compareTreesIdentical(tree1, tree2)).toEqual(false);
  });
  test('should err if trees are empty', () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    expect(() => compareTreesIdentical(tree1, tree2)).toThrow('invalid input, trees must not be empty');
  });
});

describe('compare two binary trees, same values in different spots', () => {
  test('should return true if trees have same values', () => {
    const root1 = new Node(1);
    root1.right = new Node(3);
    const second1 = new Node(2);
    second1.left = new Node(4);
    second1.right = new Node(5);
    root1.left = second1;
    const tree1 = new BinaryTree(root1);

    const root2 = new Node(1);
    root2.left = new Node(3);
    const second2 = new Node(2);
    second2.left = new Node(4);
    second2.right = new Node(5);
    root2.right = second2;
    const tree2 = new BinaryTree(root2);
    expect(compareTwoTreesValues(tree1, tree2)).toEqual(true);
  });
  test('should return false if trees have different values', () => {
    const root1 = new Node(1);
    root1.right = new Node(3);
    const second1 = new Node(2);
    second1.left = new Node(4);
    second1.right = new Node(7);
    root1.left = second1;
    const tree1 = new BinaryTree(root1);

    const root2 = new Node(1);
    root2.left = new Node(3);
    const second2 = new Node(2);
    second2.left = new Node(4);
    second2.right = new Node(5);
    root2.right = second2;
    const tree2 = new BinaryTree(root2);
    expect(compareTwoTreesValues(tree1, tree2)).toEqual(false);
  });
  test('should return false if trees are different sizes', () => {
    const root1 = new Node(1);
    root1.right = new Node(3);
    const second1 = new Node(2);
    const four = new Node(4);
    four.right = new Node(2);
    second1.left = four;
    second1.right = new Node(5);
    root1.left = second1;
    const tree1 = new BinaryTree(root1);

    const root2 = new Node(1);
    root2.left = new Node(3);
    const second2 = new Node(2);
    second2.left = new Node(4);
    second2.right = new Node(5);
    root2.right = second2;
    const tree2 = new BinaryTree(root2);
    expect(compareTwoTreesValues(tree1, tree2)).toEqual(false);
  });
  test('should throw error if trees are empty', () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    expect(() => compareTwoTreesValues(tree1, tree2)).toThrow('invalid input, trees must not be empty');
  });
});
