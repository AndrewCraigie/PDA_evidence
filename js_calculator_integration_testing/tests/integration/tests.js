var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {

  let running_total = null;

  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
    running_total = element(by.css('#running_total'));
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    //running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  // Number button 1
  it('it should display 1 in running_total after clicking the 1 button', function(){
    element(by.css('#number1')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1')
  })

  // Number button 2
  it('it should display 2 in running_total after clicking the 2 button', function(){
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  // Number button 3
  it('it should display 3 in running_total after clicking the 3 button', function(){
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })

  // Number button 4
  it('it should display 4 in running_total after clicking the 4 button', function(){
    element(by.css('#number4')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })

  // Number button 5
  it('it should display 5 in running_total after clicking the 5 button', function(){
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  })

  // Number button 6
  it('it should display 6 in running_total after clicking the 6 button', function(){
    element(by.css('#number6')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
  })

  // Number button 7
  it('it should display 7 in running_total after clicking the 7 button', function(){
    element(by.css('#number7')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('7')
  })

  // Number button 8
  it('it should display 8 in running_total after clicking the 8 button', function(){
    element(by.css('#number8')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
  })

  // Number button 9
  it('it should display 9 in running_total after clicking the 9 button', function(){
    element(by.css('#number9')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9')
  })

  // Number button 0
  it('it should display 0 in running_total after clicking the 0 button', function(){
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0')
  })

  The arithmetical operations update the display
  with the result of the operation

  // Plus button
  it('it should display 3 after clicking 1, +, 2, =', function(){
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })

  // Minus button
  it('it should display 3 after clicking 5, -, 2, =', function(){
    element(by.css('#number5')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })

  // Multiply button
  it('it should display 6 after clicking 2, *, 3, =', function(){
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
  })

  // Divide button
  it('it should display 2 after clicking 6, /, 3, =', function(){
    element(by.css('#number6')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  Chaining Multiple Operations

  Perform a plus then a subtract
  it('it should display 0 after clicking 1, +, 2, -, 3, =', function(){
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0');
  })

  // Perform a multiply than a divide
  it('it should display 4 after clicking 2, *, 4, /, 4, =', function(){
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4');
  })

  Output is as expected for a range of numbers

  Displays positive decimal result
  it('it should display 2.5 after clicking 5, /, 2, =', function(){
    element(by.css('#number5')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2.5');
  })

  // Displays negative results
  it('it should display -2 after clicking 2, -, 4, =', function(){
      element(by.css('#number2')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number4')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('-2');
  })

  Displays large numbers in scientific notation
  it('it should display 1e+21 when entering 1 followed by 21 zeros', function(){
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1e+21');
  })

  // Can output 'Not A Number'

  // Outputs 'Not A Number' when dividing by zero
  it('it displays Not a Number when dividing by zero', function(){
    element(by.css('#number2')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Not A Number');
  })


});
