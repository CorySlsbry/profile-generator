const { TestWatcher } = require('@jest/core');
const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates an employee object', () => {
    const manager = new Manager('Cory');
    
    expect(employee.name).toBe('Cory');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    
});