const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('gets Engineer GitHub username', () => {
    const engineer = new Engineer('Bryce', 1, "Blanden9@gmail.com", "Blanden9");

    expect(engineer.username).toBe('Blanden9');
});

test('gets Engineer role', () => {
    const engineer = new Engineer('Bryce', 1, "Blanden9@gmail.com", "Blanden9");

    expect(engineer.role).toBe('Engineer');
});