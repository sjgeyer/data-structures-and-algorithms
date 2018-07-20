# Set of Stacks

Imagine a literal stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure `SetOfStacks` that mimics this. 

## Challenge
`SetOfStacks` should be composed of several stacks and should create a new stack once the previous one exceeds capacity. `SetOfStacks.push()` and `SetOfStacks.pop()` should behave identically to a single stack (that is, `pop()` should return the same values as it would if there were just a single stack). Also implement a function `popAt(index)` which performs a pop operation on a specific sub-stack.

## Example

    const stack = new SetOfStacks();
    stack.push(1);                      // => { 0: [1] }
    stack.push(2);                      // => { 0: [1, 2] }
    ...
    stack.push(13);                     // => { 0: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                                                1: [11, 12, 13] }
    stack.pop();                        // => 13
    stack.pop(0);                       // => 10