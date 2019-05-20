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

    expect(sum2).to.be.equal(sum1);
  });

});
