'use strict';

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(nodeToInsert) {
    if (!this.root) this.root = nodeToInsert;
    else this._insert(this.root, nodeToInsert);
  }

  _insert(rootNode, nodeToInsert) {
    if (nodeToInsert.value < rootNode.value) {
      if (!rootNode.left) rootNode.left = nodeToInsert;
      else this._insert(rootNode.left, nodeToInsert);
    } else if (!rootNode.right) {
      rootNode.right = nodeToInsert;
    } else {
      this._insert(rootNode.right, nodeToInsert);
    }
  }
}

export default BinarySearchTree;
