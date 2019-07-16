const repeatingChar = require('./repeatingChar');

test('return index of first repeating character', () => {
    expect(repeatingChar('IAMMMFINE')).toBe(3);
});

test('return index of first repeating character and case insensitive', () => {
    expect(repeatingChar('IAmMMFINE')).toBe(3);
});

test('ignore space', () => {
    expect(repeatingChar('I  AAM')).toBe(4);
});

test('return -1 if no repeating', () => {
    expect(repeatingChar('IAMFINE')).toBe(-1);
});