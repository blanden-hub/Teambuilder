const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('gets Engineer GitHub username', () => {
    const data = {
        name: "Bryce",
        id: 1,
        email: "Blanden9@gmail.com",
        username: 'Blanden9'
    };
    const engineer = new Engineer(data);

    expect(engineer.username).toBe('Blanden9');
});

test('gets Engineer role', () => {
    const data = {
        name: "Bryce",
        id: 1,
        email: "Blanden9@gmail.com",
        username: 'Blanden9'
    };
    const engineer = new Engineer(data);

    expect(engineer.role).toBe('Engineer');
});