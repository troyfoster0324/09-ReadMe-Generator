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
}



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
