const { default: expect } = require('expect');
const caesarCipher = require('./caesarCipher');

test('encrypts a string passed into the function based on a provided shift index number', () => {
    expect(caesarCipher('hello', 5)).toBe('mjqqt');
})