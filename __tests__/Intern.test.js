const { TestWatcher } = require('@jest/core');
const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates an employee object', () => {
    const manager = new Intern('Cory');
    
    expect(employee.name).toBe('Cory');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(''));
    
});