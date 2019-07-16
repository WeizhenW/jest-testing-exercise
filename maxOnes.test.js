const maxOnes = require('./maxOnes');

test('return max number of consecutive 1s', () => {
    expect(maxOnes([0,1,1,1,0,0,1,1,1,1,1])).toBe(5);
});

test('return -1 for error', () => {
    expect(maxOnes([0,1,1,0,0,2])).toBe(-1);
});

test('both string and integer are acceptable', () => {
    expect(maxOnes([0,'1',1,'1','0',0,1])).toBe(3);
});