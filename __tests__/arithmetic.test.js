'use strict';

var faker = require('faker');

var randomNumber = faker.random.number();


const arithmetic = require('../lib/arithmetic.js');

describe('Arithmetic Module', () => {
  it('should add two numbers', () =>{
    let x = randomNumber;
    let y = randomNumber;
    let sum1 = x + y;

    var sum2 = arithmetic.add(x, y);

    expect(sum2).toEqual(sum1);
  });

  it('should subtract two numbers', () =>{
    let x = randomNumber;
    let y = randomNumber;
    let sum1 = x - y;

    var sum2 = arithmetic.subtract(x, y);

    expect(sum2).toEqual(sum1);
  });

  it('should multiply two numbers', () =>{
    let x = randomNumber;
    let y = randomNumber;
    let sum1 = x * y;

    var sum2 = arithmetic.multiply(x, y);

    expect(sum2).toEqual(sum1);
  });

});
