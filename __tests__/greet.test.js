'use strict';

const greet = require('../lib/greet.js');

describe('Greet Module', () => {
  it('should return `Hello, {word} when given a word', () => {
    let param = 'Matt';
    let expectedValue = `Hello, ${param}`;
    let message = greet(param);

    expect(message).toEqual(expectedValue);
  });

  it('should return `Hello, {word} when given a word', () => {
    let param = 'world';
    let expectedValue = `Hello, ${param}`;
    let message = greet(param);

    expect(message).toEqual(expectedValue);
  });

  it('should return null when non-string values are supplied', () => {
    expect(greet(1)).toBeNull(); 
    expect(greet(true)).toBeNull(); 
    expect(greet()).toBeNull(); 
    expect(greet([])).toBeNull(); 
    expect(greet({})).toBeNull(); 
  });

});
