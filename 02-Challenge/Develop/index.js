// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    message: "What is your GitHub username?",
    name: "username"
},
{
    type: "input",
    message: "What is your email address?",
    name: "email"
},
{
    type: "input",
    message: "What is the name of your project?",
    name: "title"
},
{
    type: "input",
    message: "What is the description of your project",
    name: "description"
},
{
    type: "input",
    message: "Installation insturctions?",
    name: "instructions"
},
{
    type: "input",
    message: "What is the usage of your program?",
    name: "usage"
},
{
    type: "input",
    message: "Who contributed to this project?",
    name: "contributors"
},
{
    type: "input",
    message: "What command should be run for testing?",
    name: "tests"
},
{
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: [
        "MIT",
        "APACHE",
        "GPL",
        "BSD",
        "None"
    ]
}
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('success')
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'README.md';
        writeToFile(fileName, data)
    });
}

// Function call to initialize app
init();
