const appOperations = require('../src/appOperations');

test("multiplication property of zero", ()=> {
    expect(appOperations.multiply(5,0)).toBe(0);
});

test("adding two values", ()=> {
    expect(appOperations.add(5,5)).toBe(10);
});

test("test subtraction", ()=> {
    expect(appOperations.subtract(15,5)).toBe(10);
});

test("test divide", ()=> {
    expect(appOperations.divide(15,5)).toBe(3);
});