'use strict';

import AnimalShelter from '../fifo-animal-shelter';

const testDog = {
  type: 'dog',
  id: 1,
};
const testCat = {
  type: 'cat',
  id: 2,
};

describe('testing AnimalShelter class', () => {
  test('should add new item to AnimalShelter.allAnimals', () => {
    const testShelter = new AnimalShelter();
    testShelter.enqueue(testDog);
    testShelter.enqueue(testCat);
    expect(testShelter._allAnimals[0]).toEqual(testDog);
    expect(testShelter._allAnimals[1]).toEqual(testCat);
    expect(testShelter._allAnimals).toHaveLength(2);
  });
  test('should dequeue first animal (no pref)', () => {
    const testShelter = new AnimalShelter();
    testShelter.enqueue(testDog);
    testShelter.enqueue(testCat);
    expect(testShelter.dequeue()).toEqual(testDog);
    expect(testShelter._allAnimals[0]).toEqual(testCat);
    expect(testShelter._allAnimals).toHaveLength(1);
  });
  test('should dequeue first preferred animal', () => {
    const testShelter = new AnimalShelter();
    testShelter.enqueue(testDog);
    testShelter.enqueue(testCat);
    expect(testShelter.dequeue('cat')).toEqual(testCat);
    expect(testShelter._allAnimals[0]).toEqual(testDog);
  });
  test('should throw error for invalid animal type', () => {
    const testShelter = new AnimalShelter();
    testShelter.enqueue(testDog);
    testShelter.enqueue(testCat);
    expect(() => { testShelter.dequeue('lizard'); }).toThrow('this shelter only holds dogs and cats');
  });
});
