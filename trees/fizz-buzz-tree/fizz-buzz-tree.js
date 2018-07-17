'use strict';

const FizzBuzzTree = (tree) => {
  const divBy3 = (number) => {
    return Number.isInteger(number / 3);
  };
  const divBy5 = (number) => {
    return Number.isInteger(number / 5);
  };
  const preOrderTraversal = (node) => {
    if (!node) return undefined;
    if (divBy3(node.value) && divBy5(node.value)) node.value = 'FizzBuzz';
    else if (divBy3(node.value)) node.value = 'Fizz';
    else if (divBy5(node.value)) node.value = 'Buzz';
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
    return undefined;
  };
  preOrderTraversal(tree.root);
  return tree;
};

export default FizzBuzzTree;
