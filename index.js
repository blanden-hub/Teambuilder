const fs = require('fs');
const inquirer = require('inquirer');


function init() {
    return inquirer.prompt(employeeQuestions);
};

init();