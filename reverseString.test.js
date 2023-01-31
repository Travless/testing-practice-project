const reverseString = require('./reverseString');

test('will take string and return it reversed', () => {
    expect(reverseString('hello')).toBe('olleh')
})