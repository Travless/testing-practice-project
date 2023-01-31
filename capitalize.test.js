const { default: expect } = require('expect');
const capitalize = require('./capitalize');

test('capitilizes the first letter of a string', () => {
    expect(capitalize("hello")).toBe("Hello")
})
