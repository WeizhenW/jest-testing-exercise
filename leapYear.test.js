const leapYear = require('./leapYear');

test('divisible by 400 => leap year', () => {
    expect(leapYear(2000)).toBe(true);
})

test('divisible by 100 not 400 => not leap year', () => {
    expect(leapYear(1900)).toBe(false);
})

test('divisible by 4 but not 100 => leap year', () => {
    expect(leapYear(1996)).toBe(true);
})

test('not divisible by 4 => not leap year', () => {
    expect(leapYear(1995)).toBe(false);
})