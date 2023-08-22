const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

//    SUM
describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 300;
    actual = sum(100, 200);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -5;
    actual = sum(-2, -3);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 0;
    actual = sum(0, 0);
    expect(actual).toBe(expected);
  });

});


//    SUBSTRACT
test('can subtract two small positive numbers', () => {
  expected = 1;
  actual = subtract(3, 2);
  expect(actual).toBe(expected);
});

test('can subtract two negative numbers', () => {
  expected = -1;
  actual = subtract(-3, -2);
  expect(actual).toBe(expected);
});


//    MULTIPLY
test('can multiply two small positive numbers', () => {
  expected = 6;
  actual = multiply(3, 2);
  expect(actual).toBe(expected);
});

test('can multiply a negative number', () => {
  expected = -6;
  actual = multiply(-3, 2);
  expect(actual).toBe(expected);
});


//    DIVIDE
test('can divide two small positive numbers', () => {
expected = 2;
actual = divide(8, 4);
expect(actual).toBe(expected);
});

test('can divide by zero and return infinity', () => {
expected = Infinity;
actual = divide(6, 0);
expect(actual).toBe(expected);
});


//    MODULUS
test('can get modulus of two numbers', () => {
expected = 2;
actual = modulus(10, 4);
expect(actual).toBe(expected);
});

test('can get modulus by zero and return NaN', () => {
expected = NaN;
actual = modulus(3, 0);
expect(actual).toBe(expected);
});


//    EVEN NUMBERs
test('can determine if number is even', () => {
expect(even(6)).toBeTruthy();
});

test('can determine if number is not even', () => {
expect(even(5)).toBeFalsy();
});


//    ODD NUMBERS
test('can determine if number is odd', () => {
expect(odd(7)).toBeTruthy();
});
  
test('can determine if number is not odd', () => {
expect(odd(6)).toBeFalsy();
});
