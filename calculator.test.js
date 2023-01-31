const { default: expect } = require('expect');
const calculator = require('./calculator');

// test for the function add
test('take two parameters and return their sum', () => {
    expect(calculator.add(1,2)).toBe(3)
})

// test for the function subtract
test('take two parameters and return their difference', () => {
    expect(calculator.subtract(1,2)).toBe(-1)
})

// test for the function divide
test('take two parameters and provide their quotient', () => {
    expect(calculator.divide(10, 5)).toBe(2)
})

// test for the function multiply
test('takes two parameters and provide their product', () => {
    expect(calculator.multiply(2,3)).toBe(6)
})
