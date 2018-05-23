'use strict';

class KAryNode {
  constructor(value) {
    this.children = [];
    this.value = value;
  }
  appendChild(value) {
    this.children.push(new KAryNode(value));
  }
}

export default KAryNode;
