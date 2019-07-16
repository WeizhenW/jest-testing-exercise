const addPositive = require('./addPositive');

test('return the sum of all positive numbers', () => {
    expect(addPositive([1, 0, 3, -1])).toBe(4);
});

test('return the sum of all positive numbers, and convert string to number', () => {
    expect(addPositive([1, 0, '3', -1])).toBe(4);
});

test('return 0 for empty array', () => {
    expect(addPositive([])).toBe(0);
});