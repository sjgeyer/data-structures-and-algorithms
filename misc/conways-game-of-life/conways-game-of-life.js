'use strict';

const sumNeighbors = (state) => {
  const neighborSums = [];
  for (let i = 0; i < state.length; i++) {
    neighborSums[i] = [];
    for (let j = 0; j < state[i].length; j++) {
      const neighbors = [
        state[i][j - 1],
        state[i][j + 1],
        state[i - 1] ? state[i - 1][j] : 0,
        state[i - 1] ? state[i - 1][j - 1] : 0,
        state[i - 1] ? state[i - 1][j + 1] : 0,
        state[i + 1] ? state[i + 1][j] : 0,
        state[i + 1] ? state[i + 1][j - 1] : 0,
        state[i + 1] ? state[i + 1][j + 1] : 0,
      ];
      neighborSums[i][j] = neighbors.filter(x => x).length;
    }
  }
  return neighborSums;
};

const createTick = (currentState) => {
  const newState = [];
  const ref = sumNeighbors(currentState);

  for (let i = 0; i < currentState.length; i++) {
    newState[i] = [];
    for (let j = 0; j < currentState[i].length; j++) {
      if (typeof currentState[i][j] !== 'number') throw new Error('invalid data type passed. seed must be made of 0s and 1s');
      if (currentState[i][j] === 1 && ref[i][j] < 2) {
        newState[i][j] = 0;
      } else if (currentState[i][j] === 1 && ref[i][j] > 3) {
        newState[i][j] = 0;
      } else if (currentState[i][j] === 0 && ref[i][j] === 3) {
        newState[i][j] = 1;
      } else if (currentState[i][j] === 1 && (ref[i][j] === 2 || ref[i][j] === 3)) {
        newState[i][j] = 1;
      } else {
        newState[i][j] = 0;
      }
    }
  }
  return newState;
};

const conwaysGameOfLife = (seed, ticks) => {
  if (!Array.isArray(seed)) throw new Error('invalid data type. seed must be an array');

  if (!ticks) return createTick(seed);
  let result = seed;
  for (let i = 0; i < ticks; i++) {
    result = createTick(result);
  }
  return result;
};

export default conwaysGameOfLife;
