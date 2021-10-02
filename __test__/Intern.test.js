const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('gets Intern school', () => {
    const data = {
        name: "Bryce",
        id: 1,
        email: "Blanden9@gmail.com",
        school: 'yoo'
    };
    const intern = new Intern(data);

    expect(intern.school).toBe('UCLA Extension');
});

test('gets Intern role', () => {
    const data = {
        name: "Bryce",
        id: 1,
        email: "Blanden9@gmail.com",
        school: 'yoo'
    };
    const intern = new Intern(data);

    expect(intern.role).toBe('Intern');
});