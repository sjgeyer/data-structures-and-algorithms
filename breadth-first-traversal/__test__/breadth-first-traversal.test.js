'use strict';

import Node from '../../data-structures/binary-tree/node';
import BinaryTree from '../../data-structures/binary-tree/binary-tree';
import breadthFirstTraversal from '../breadth-first-traversal';

describe('should return values in level order', () => {
  test('tree given in example', () => {
    const six = new Node(6, new Node(5), new Node(11));
    const seven = new Node(7, new Node(2), six);
    const nine = new Node(9, new Node(4));
    const five = new Node(5, null, nine);
    const root = new Node(2, seven, five);
    const tree = new BinaryTree(root);
    expect(breadthFirstTraversal(tree)).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });
  test('tree with only one value per level', () => {
    const three = new Node(3, new Node(4));
    const two = new Node(2, three);
    const root = new Node(1, two);
    const tree = new BinaryTree(root);
    expect(breadthFirstTraversal(tree)).toEqual([1, 2, 3, 4]);
  });
  test('tree with values corresponding to their levels', () => {
    const two = new Node(2, new Node(3), new Node(3));
    const root = new Node(1, two, two);
    const tree = new BinaryTree(root);
    expect(breadthFirstTraversal(tree)).toEqual([1, 2, 2, 3, 3, 3, 3]);
  });
});
