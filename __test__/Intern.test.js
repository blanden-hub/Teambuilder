const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('gets Intern school', () => {
    const intern = new Intern('Bryce', 1, "Blanden9@gmail.com", "yoo");

    expect(intern.school).toBe('yoo');
});

test('gets Intern role', () => {
    const intern = new Intern('Bryce', 1, "Blanden9@gmail.com", "yoo");

    expect(intern.role).toBe('Intern');
});