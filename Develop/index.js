// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown';


// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      message: 'What is the title of your Project ?',
      name: 'title',
    },
    {
      message: 'What license would you like to choose ?',
      choices: ['The MIT License', 'Apache 2.0 License', 'GNU GPL v3', 'None'],
      name: 'license',
      type: 'list',
    },
    {
      message: 'Give your project a description. if any ...',
      name: 'description',
    },
    {
      message: 'What technologies were used in this project',
      name: 'technologiesUsed',
    },
  ])
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  questions();
}

// Function call to initialize app
init();
