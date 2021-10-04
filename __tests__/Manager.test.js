const { TestWatcher } = require('@jest/core');
const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');
jest.mock('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager('Cory');
    
    expect(manager.name).toBe('Cory');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));

    
});