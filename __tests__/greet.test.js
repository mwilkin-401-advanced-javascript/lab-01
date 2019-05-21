'use strict';

const greet = require('../lib/greet.js');

describe('Greet Module', () => {
  it('should return `Hello, {word} when given a word', () => {
    let param = 'Matt';
    let expectedValue = `Hello, ${param}`;
    let message = greet(param);

    expect(message).toEqual(expectedValue);
  });

});
