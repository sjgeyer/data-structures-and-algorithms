'use strict';

module.exports = function llMerge(list1, list2) {
  let current1 = list1.head;
  let current2 = list2.head;
  while (current1) {
    const temp = current1.next;
    current1.next = current2;
    current2 = temp;
    current1 = current1.next;
  }
  return list1;
};
