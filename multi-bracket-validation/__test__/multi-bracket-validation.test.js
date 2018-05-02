'use strict';

import multiBracketValidation from '../multi-bracket-validation';

describe('multi-bracket-validation.js', () => {
  test('should return true', () => {
    expect(multiBracketValidation('[]{}()')).toEqual(true);
    expect(multiBracketValidation('{}{Some}[Words](())')).toEqual(true);
  });
  test('should return false', () => {
    expect(multiBracketValidation('{{{{})]')).toEqual(false);
    expect(multiBracketValidation('[{(}])')).toEqual(false);
    expect(multiBracketValidation('][')).toEqual(false);
  });
});
