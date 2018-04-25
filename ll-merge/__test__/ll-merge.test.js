const llMerge = require('../ll-merge');
const LinkedList = require('../linked-list');

describe('testing llMerge function', () => {
  test('should return merged linked lists', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(2);
    list1.append(3);
    const list2 = new LinkedList();
    list2.append(4);
    list2.append(5);
    list2.append(6);
    const testList = new LinkedList();
    testList.append(1);
    testList.append(4);
    testList.append(2);
    testList.append(5);
    testList.append(3);
    testList.append(6);
    expect(llMerge(list1, list2)).toEqual(testList);
  });
});
