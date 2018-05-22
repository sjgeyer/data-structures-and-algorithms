'use strict';

import KAryTree from '../k-ary-tree';
import KAryNode from '../k-ary-node';
import PrintLevelOrder from '../print-level-order';

describe('print-level-order.js', () => {
  test('should print out tree nodes in level order', () => {
    const a = new KAryNode('a');
    const tree = new KAryTree(a);
    tree.root.appendChild('b');
    tree.root.children[0].appendChild('e');
    tree.root.children[0].appendChild('f');
    tree.root.children[0].appendChild('g');
    tree.root.appendChild('c');
    tree.root.children[1].appendChild('h');
    tree.root.appendChild('d');
    tree.root.children[2].appendChild('i');
    tree.root.children[2].appendChild('j');
    tree.root.children[2].appendChild('k');
    expect(PrintLevelOrder(tree)).toEqual('a\nbcd\nefghijk\n');
  });
  test('should throw error if no tree passed', () => {
    expect(() => { PrintLevelOrder(); }).toThrow('Missing input');
  });
  test('should throw error if empty tree passed', () => {
    const tree = new KAryTree();
    expect(() => { PrintLevelOrder(tree); }).toThrow('Cannot print empty tree');
  });
});
