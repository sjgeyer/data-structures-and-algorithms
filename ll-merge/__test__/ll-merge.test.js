const llMerge = require('../ll-merge');
const LinkedList = require('../linked-list');

describe('testing llMerge function', () => {
  test('should return merged linked lists, lists equal value', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(1);
    const list2 = new LinkedList();
    list2.append(2);
    list2.append(2);
    const testList = new LinkedList();
    testList.append(1);
    testList.append(2);
    testList.append(1);
    testList.append(2);
    expect(llMerge(list1, list2)).toEqual(testList);
  });
  test('should return merged linked lists, lists unequal value 2>1', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(1);
    const list2 = new LinkedList();
    list2.append(2);
    list2.append(2);
    list2.append(2);
    const testList = new LinkedList();
    testList.append(1);
    testList.append(2);
    testList.append(1);
    testList.append(2);
    testList.append(2);
    expect(llMerge(list1, list2)).toEqual(testList);
  });
  test('should return merged linked lists, lists unequal value 1>2', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(1);
    list1.append(1);
    const list2 = new LinkedList();
    list2.append(2);
    list2.append(2);
    const testList = new LinkedList();
    testList.append(1);
    testList.append(2);
    testList.append(1);
    testList.append(2);
    testList.append(1);
    expect(llMerge(list1, list2)).toEqual(testList);
  });
  test('should err out for empty list', () => {
    const list1 = new LinkedList();
    list1.append(1);
    const list2 = new LinkedList();
    expect(() => { llMerge(list1, list2); }).toThrow('Cannot merge empty list');
  });
});
