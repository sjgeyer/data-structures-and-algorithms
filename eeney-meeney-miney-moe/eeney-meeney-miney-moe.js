'use strict';

import Queue from '../data-structures/queue';

const EeneyMeeneyMineyMoe = (names, n) => {
  if (!names || !n) throw new Error('missing or invalid input');
  if (!Array.isArray(names)) throw new Error('invalid input. list must be an array');
  const queue = new Queue();
  let lastName = null;
  names.forEach(name => queue.enqueue(name));
  while (!queue.isEmpty()) {
    if (queue._storage.length === 1) [lastName] = queue._storage;
    for (let i = 0; i < n - 1; i++) {
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue();
  }
  return lastName;
};

export default EeneyMeeneyMineyMoe;
