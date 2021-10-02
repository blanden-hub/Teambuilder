const Manager = require('../lib/Manager');

test('gets Employee office number', () => {
    const employee = new Manager('Bryce', 1, "Blanden9@gmail.com", "Employee", 1);

    expect(employee.officeNumber).toEqual(1);
}); 