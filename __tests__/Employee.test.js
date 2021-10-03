const { TestWatcher } = require('@jest/core');
const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
jest.mock('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Cory');
    
    expect(employee.name).toBe('Cory');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    
});