const dnaString = require('./dnaString');

test('remove non canonical dna base value', () => {
    expect(dnaString('CATGBCD')).toBe('CATGC');
});

test('case sensitive', () => {
    expect(dnaString('CaTgBcD')).toBe('CT');
});

test('return empty string if input is empty', () => {
    expect(dnaString('')).toBe('');
});