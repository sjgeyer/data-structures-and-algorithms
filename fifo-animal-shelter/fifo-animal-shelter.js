'use strict';

export default class AnimalShelter {
  constructor() {
    this._allAnimals = [];
  }

  enqueue(animal) {
    this._allAnimals.push(animal);
  }

  dequeue(pref) {
    const len = this._allAnimals.length;
    let dequeuedAnimal = null;
    if (!pref) {
      dequeuedAnimal = this._allAnimals.splice(0, 1);
    } else {
      for (let i = 0; i < len; i++) {
        if (this._allAnimals[i].type === pref) {
          dequeuedAnimal = this._allAnimals.splice(i, 1);
        }
      }
    }
    if (!dequeuedAnimal) throw new Error('this shelter only holds dogs and cats');
    return dequeuedAnimal[0];
  }
}
