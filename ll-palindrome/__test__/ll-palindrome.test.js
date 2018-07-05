'use strict';

import LinkedList from '../../data-structures/linked-list/linked-list';
import isPalindrome from '../ll-palindrome';

describe('ll palindrome', () => {
  test('should return false if not palindrome', () => {
    const list = new LinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    expect(isPalindrome(list)).toEqual(false);
  });
  test('should return true if palindrome', () => {
    const list = new LinkedList();
    list.push(1);
    list.push(2);
    list.push(2);
    list.push(1);
    expect(isPalindrome(list)).toEqual(true);
  });
});
