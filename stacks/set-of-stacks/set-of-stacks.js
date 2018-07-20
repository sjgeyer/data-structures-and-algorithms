'use strict';

export default class SetOfStacks {
  constructor() {
    this._stacks = {
      0: [],
    };
  }

  push(value) {
    if (!value && value !== 0) throw new Error('invalid input. value must be defined');
    let currentIndex = 0;
    let currentStack;
    while (this._stacks[currentIndex]) {
      currentStack = this._stacks[currentIndex];
      if (currentStack.length < 10) break;
      else currentIndex += 1;
    }
    if (!this._stacks[currentIndex]) this._stacks[currentIndex] = [value];
    else currentStack.push(value);
    return this;
  }

  pop(index) {
    // so that users can pass in '0' and still receive the popped value from that index
    if (index + 1) return this._stacks[index].pop();
    const stackIndexes = Object.keys(this._stacks);
    let lastIndex = stackIndexes.length - 1;
    while (this._stacks[lastIndex].length < 1) {
      lastIndex -= 1;
    }
    return this._stacks[stackIndexes[lastIndex]].pop();
  }
}
