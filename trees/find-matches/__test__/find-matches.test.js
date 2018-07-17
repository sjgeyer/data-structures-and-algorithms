'use strict';

import FindMatches from '../find-matches';
import KAryTree from '../../../data-structures/k-ary-tree/k-ary-tree';
import KAryNode from '../../../data-structures/k-ary-tree/k-ary-node';

describe('find-matches.js', () => {
  test('should return all matches as linked list', () => {
    const one = new KAryNode(1);
    const tree = new KAryTree(one);
    tree.root.appendChild(3);
    tree.root.children[0].appendChild(1);
    tree.root.children[0].appendChild(4);
    tree.root.appendChild(1);
    tree.root.children[1].appendChild(7);
    tree.root.appendChild(2);
    tree.root.children[2].appendChild(8);
    const result = FindMatches(tree, 1);
    expect(result.head.value.value).toBe(1);
    expect(result.head.next.value.value).toBe(1);
    expect(result.head.next.next.value.value).toBe(1);
    expect(result.head.next.next.next).toBeNull();
  });
  test('should return "No Matches Found" if number is not in tree', () => {
    const one = new KAryNode(1);
    const tree = new KAryTree(one);
    tree.root.appendChild(3);
    tree.root.appendChild(1);
    tree.root.appendChild(2);
    const result = FindMatches(tree, 9);
    expect(result).toEqual('No matches found.');
  });
  test('should err out if argument is not passed', () => {
    expect(() => FindMatches(null, 8)).toThrow('Required arguments missing');
  });
  test('should err out if tree is empty', () => {
    const tree = new KAryTree();
    expect(() => FindMatches(tree, 8)).toThrow('Cannot evaluate empty tree');
  });
});
