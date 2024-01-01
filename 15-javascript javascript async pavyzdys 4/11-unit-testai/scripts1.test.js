const sum = require('./scripts1');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('10 and 40 sum shall be 50', () => {
    expect(sum(10, 40)).toBe(50);
});