const { TestWatcher } = require('@jest/core');
const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');
jest.mock('../lib/Engineer.js');

test('creates an employee object', () => {
    const engineer = new Engineer('Cory');
    
    expect(engineer.name).toBe('Cory');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHubUser).toEqual(expect.any(String));

    
});