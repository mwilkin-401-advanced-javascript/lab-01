'use strict';

var faker = require('faker');

var randomNumber = faker.random.number();


const arithmetic = require('../lib/arithmetic.js');

describe('Arithmetic Module', () => {
  it('should add two numbers', () =>{
    let x = randomNumber;
    let y = randomNumber;
    let num1 = x + y;

    var num2 = arithmetic.add(x, y);

    expect(num2).toEqual(num1);
  });

  it('should subtract two numbers', () =>{
    let x = randomNumber;
    let y = randomNumber;
    let num1 = x - y;

    var num2 = arithmetic.subtract(x, y);

    expect(num2).toEqual(num1);
  });

  it('should multiply two numbers', () =>{
    let x = randomNumber;
    let y = randomNumber;
    let num1 = x * y;

    var num2 = arithmetic.multiply(x, y);

    expect(num2).toEqual(num1);
  });

  it('should divide two numbers', () =>{
    let x = randomNumber;
    let y = randomNumber;
    let num1 = x / y;

    var num2 = arithmetic.divide(x, y);

    expect(num2).toEqual(num1);
  });

  it('should return runn if any of the arguments are Nan', () => {
    expect(arithmetic.add([],6)).toBeNull();
    expect(arithmetic.add(true,6)).toBeNull();
    expect(arithmetic.add('10',6)).toBeNull();
    expect(arithmetic.add({},6)).toBeNull();
    expect(arithmetic.add(null,6)).toBeNull();
    expect(arithmetic.add('6','six')).toBeNull();
    expect(arithmetic.add(undefined,6)).toBeNull();

  });

});
