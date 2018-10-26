var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  // it('it has a sample test', function(){
  //   assert.equal(true, true)
  // })

  // Unit Tests

  // The calculator can add two numbers
  it('it can add 1 and 4 to get 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(5, calculator.runningTotal);
  })

  // The calculator can can subtract two numbers
  it('it can subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal);
  })

  // The calculator can multiply two numbers
  it('it can multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal);
  })

  // The calculator can divide two numbers
  it('it can divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal);
  })

  // Integration Tests

  // Concatenation of multiple number button clicks
  it('it concatenates a click on 3, then 4 to get 34', function(){
    assert.equal(0, calculator.previousTotal);
    calculator.numberClick(3);
    assert.equal(3, calculator.runningTotal);
    calculator.numberClick(4);
    assert.equal(34, calculator.runningTotal);
  })

  // Chaining multiple operations together
  it('it chains multiple operations together', function(){
    // Clicking 3 + 4 - 7 = 0
    assert.equal(0, calculator.previousTotal);
    assert.equal(null, calculator.previousOperator);
    // Click 3
    calculator.numberClick(3);
    assert.equal(3, calculator.runningTotal);
    // Click +
    calculator.operatorClick('+');
    assert.equal('+', calculator.previousOperator);
    // Click 4
    calculator.numberClick(4);
    assert.equal(4, calculator.runningTotal);
    // Click -
    calculator.operatorClick('-');
    assert.equal('-', calculator.previousOperator);
    assert.equal(7, calculator.runningTotal);
    // Click 7
    calculator.numberClick(7);
    assert.equal(7, calculator.runningTotal);
    // Click =
    calculator.operatorClick('=');
    assert.equal(null, calculator.previousOperator);
    assert.equal(0, calculator.runningTotal);
  })

  // Clear the running total without affecting the calculation
  it('clicking clear does not affect a running calculation', function(){
    // Clicking 1, +, 2, clr, +, 3, =, 4
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.equal(4, calculator.runningTotal);
  })

});
