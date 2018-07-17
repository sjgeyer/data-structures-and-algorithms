'use strict';

const multiBracketValidation = (input) => {
  const opens = [];
  const len = input.length;
  for (let i = 0; i < len; i++) {
    if (input[i] === '[' || input[i] === '{' || input[i] === '(') opens.push(input[i]);
    if (input[i] === ']') {
      if (opens[opens.length - 1] === '[') opens.pop();
      else { return false; }
    }
    if (input[i] === '}') {
      if (opens[opens.length - 1] === '{') opens.pop();
      else { return false; }
    }
    if (input[i] === ')') {
      if (opens[opens.length - 1] === '(') opens.pop();
      else { return false; }
    }
  }
  return opens.length <= 0;
};

export default multiBracketValidation;
