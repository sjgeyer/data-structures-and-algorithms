'use strict';

import EeneyMeeneyMineyMoe from '../eeney-meeney-miney-moe';

describe('eeney meeney miney moe', () => {
  test('should return last remaining name', () => {
    const list = ['John', 'Emily', 'Dan', 'Jen', 'Carl'];
    expect(EeneyMeeneyMineyMoe(list, 4)).toEqual('John');
  });
  test('should throw error for missing or invalid input', () => {
    const list = ['John', 'Emily', 'Dan', 'Jen', 'Carl'];
    expect(() => EeneyMeeneyMineyMoe(list, 0)).toThrow('missing or invalid input');
    expect(() => EeneyMeeneyMineyMoe('test')).toThrow('missing or invalid input');
  });
  test('should throw error if list is not an array', () => {
    expect(() => EeneyMeeneyMineyMoe({ name1: 'John' }, 5)).toThrow('invalid input. list must be an array');
  });
});
