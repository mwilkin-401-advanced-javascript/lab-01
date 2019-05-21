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

  // Improper arguments

  it('should return null if any of the arguments are Nan', () => {
    expect(arithmetic.add([],6)).toBeNull();
    expect(arithmetic.add(true,6)).toBeNull();
    expect(arithmetic.add('10',6)).toBeNull();
    expect(arithmetic.add({},6)).toBeNull();
    expect(arithmetic.add(null,6)).toBeNull();
    expect(arithmetic.add('6','six')).toBeNull();
    expect(arithmetic.add(undefined,6)).toBeNull();

  });

  it('should return null if any of the arguments are Nan', () => {
    expect(arithmetic.subtract([],6)).toBeNull();
    expect(arithmetic.subtract(true,6)).toBeNull();
    expect(arithmetic.subtract('10',6)).toBeNull();
    expect(arithmetic.subtract({},6)).toBeNull();
    expect(arithmetic.subtract(null,6)).toBeNull();
    expect(arithmetic.subtract('6','six')).toBeNull();
    expect(arithmetic.subtract(undefined,6)).toBeNull();

  });

});
