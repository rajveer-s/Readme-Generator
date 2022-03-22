import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown';


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
    {
      message: 'Does the user need to install anything ?',
      name: 'installation',
    },
    {
      message: 'Is there is any usage guide to be followed ?',
      name: 'usage',
    },
    {
      message: 'Is there any guidelines for contributing ?',
      name: 'contributing',
    },
    {
      message: 'Are there any tests for your project ?',
      name: 'tests',
    },
    {
      message: 'Please provide your Github username',
      name: 'githubusername',
    },
    {
      message: 'What is the best way to contact your if the user has any questions ?',
      name: 'questions',
    }
  ]).then((data) => {
    writeToFile('UsersREADME.md', generateMarkdown(data));
  })
}
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('Generating your README File...'))
}

function init() {
  questions();
}

// Function call to initialize app
init();
