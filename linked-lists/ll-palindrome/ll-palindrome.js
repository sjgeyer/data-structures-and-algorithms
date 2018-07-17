'use strict';

const isPalindrome = (ll) => {
  if (!ll.head) throw new Error('list cannot be empty');
  const values = [];
  let currentNode = ll.head;
  while (currentNode) {
    values.push(currentNode.value);
    currentNode = currentNode.next;
  }
  let palindrome = true;
  const len = values.length;
  const middle = Math.floor(len / 2);
  for (let i = 0; i < middle; i++) {
    if (!(values[i] === values[len - i - 1])) palindrome = false;
  }
  return palindrome;
};

export default isPalindrome;
