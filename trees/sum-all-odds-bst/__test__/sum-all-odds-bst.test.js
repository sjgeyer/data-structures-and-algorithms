'use strict';

import BST from '../../../data-structures/binary-search-tree/binary-search-tree';
import Node from '../../../data-structures/binary-search-tree/node';
import sumAllOdds from '../sum-all-odds-bst';

describe('sum all odds in BST', () => {
  test('should return sum of all odds', () => {
    const bst = new BST();
    bst.insert(new Node(10));
    bst.insert(new Node(3));
    bst.insert(new Node(16));
    bst.insert(new Node(2));
    bst.insert(new Node(5));
    bst.insert(new Node(20));
    expect(sumAllOdds(bst)).toEqual(8);
  });
  test('should return 0 if no odds', () => {
    const bst = new BST();
    bst.insert(new Node(10));
    bst.insert(new Node(16));
    bst.insert(new Node(2));
    bst.insert(new Node(20));
    expect(sumAllOdds(bst)).toEqual(0);
  });
  test('should err out if tree is empty', () => {
    expect(() => sumAllOdds()).toThrow('invalid input. tree must not be empty');
    const bst = new BST();
    expect(() => sumAllOdds(bst)).toThrow('invalid input. tree must not be empty');
  });
});
