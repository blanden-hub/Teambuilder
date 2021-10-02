const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates a Employee object', () => {
    const data = {
        name: "Bryce",
        id: 1,
        email: "Blanden9@gmail.com",
        officeNumber: 1
    };
    const employee = new Employee(data);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
});

test('gets Employee name', () => {
    const data = {
        name: "Bryce",
        id: 1,
        email: "Blanden9@gmail.com",
        officeNumber: 1
    };
    const employee = new Employee(data);

    expect(employee.name).toBe('Bryce');
});

test('gets Employee ID', () => {
    const data = {
        name: "Bryce",
        id: 1,
        email: "Blanden9@gmail.com",
        officeNumber: 1
    };
    const employee = new Employee(data);

    expect(employee.id).toEqual(1);
});

test('gets Employee email', () => {
    const data = {
        name: "Bryce",
        id: 1,
        email: "Blanden9@gmail.com",
        officeNumber: 1
    };
    const employee = new Employee(data);

    expect(employee.email).toBe('Blanden9@gmail.com');
});

test('gets Employee role', () => {
    const data = {
        name: "Bryce",
        id: 1,
        email: "Blanden9@gmail.com",
        officeNumber: 1
    };
    const employee = new Employee(data);

    expect(employee.role).toBe('Employee');
});