const analyzeArray = require('./analyzeArray')

test('take an array and return an object with key value pairs computing the array average, the array min, the array max, and length of the array', () => {
    expect(analyzeArray([1,2,3,4,5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5,
    });
});