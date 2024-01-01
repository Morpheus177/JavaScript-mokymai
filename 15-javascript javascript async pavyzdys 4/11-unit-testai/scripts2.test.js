const biggerNum = require('./scripts2');

test('10 bigger than 4', () => {
    expect(biggerNum(10, 4)).toBe(10);
});

test('4 less than 10', () => {
    let num1 = 4;
    let num2 = 10;
    expect(biggerNum(num1, num2)).toBe(10);
});

test('5 equals 5', () => {
    expect(biggerNum(5, 5)).toBe(5);
});