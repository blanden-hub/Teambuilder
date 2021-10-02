const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');


test('gets Manager office number', () => {
    const data = {
        name: "Bryce",
        id: 1,
        email: "Blanden9@gmail.com",
        officeNumber: 1
    };
    const manager = new Manager(data);

    expect(manager.officeNumber).toEqual(1);
});

test('gets Manager role', () => {
    const data = {
        name: "Bryce",
        id: 1,
        email: "Blanden9@gmail.com",
        officeNumber: 1
    };
    const manager = new Manager(data);

    expect(manager.role).toBe('Manager');
});