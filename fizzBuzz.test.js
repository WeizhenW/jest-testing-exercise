const fizzBuzz = require('./fizzBuzz');

test('If the number is divisible by 3, return "Fizz"', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
});

test('If the number is divisible by 5, return "Buzz"', () => {
    expect(fizzBuzz(20)).toBe('Buzz');
});

test('If the number is divisible by both 3 and 5, return "FizzBuzz"', () => {
    expect(fizzBuzz(30)).toBe('FizzBuzz');
});

test('otherwise, return the number', () => {
    expect(fizzBuzz(4)).toBe(4);
});