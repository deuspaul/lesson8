const appOperations = require('../src/appOperations');

test("multiplication property of zero", ()=> {
  expect(appOperations.multiply(5,0)).toBe(0);
})

test("adding two values", ()=> {
    expect(appOperations.add(5,6)).toBe(11);
})

test("test subtraction", ()=> {
    expect(appOperations.subtract(4,2)).toBe(2);
})

test("test divide", ()=> {
  expect(appOperations.divide(20,5)).toBe(4);
})