'use strict';

import Node from '../../data-structures/binary-tree/node';
import BinaryTree from '../../data-structures/binary-tree/binary-tree';
import FizzBuzzTree from '../fizz-buzz-tree';

describe('fizz-buzz-tree.js', () => {
  test('should replace multiples of 3 with fizz', () => {
    const root = new Node(1, new Node(2), new Node(3));
    const tree1 = new BinaryTree(root);
    FizzBuzzTree(tree1);
    expect(tree1.root.right.value).toEqual('Fizz');
  });
  test('should replace multiples of 5 with buzz', () => {
    const root = new Node(5, new Node(2), new Node(3));
    const tree1 = new BinaryTree(root);
    FizzBuzzTree(tree1);
    expect(tree1.root.value).toEqual('Buzz');
  });
  test('should replace multiples of 3 & 5 with fizzbuzz', () => {
    const root = new Node(1, new Node(15), new Node(3));
    const tree1 = new BinaryTree(root);
    FizzBuzzTree(tree1);
    expect(tree1.root.left.value).toEqual('FizzBuzz');
  });
});
