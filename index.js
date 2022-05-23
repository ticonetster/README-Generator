// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const gm = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "what is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project"
    },
    {
        type: "input",
        name: "install",
        message: "What command should be run to install dependencies?"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["Apache 2.0", "BSD 3-Clause", "GPLv2", "GPLv3", "MIT"]
    },
    {
        type: "input",
        name: "credit",
        message: "What does the user need to know about contributing to the repo?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then ((answers) => writeToFile("README.md", gm(answers)))
}

// Function call to initialize app
init();