// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
//import { renderLiscense } from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    //What is the name of your website?
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your website?',
        // defualt: 'npm install'
    },
    //Please provide a description
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of the project'
    },
    //Choose your License
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for the project',
        choices: ['MIT', 'GPLv3', 'APACHE 2.0', 'BSD 3-Clause', 'None']
    },
    //Installation Instructions 
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'Please provide installation instructions',
    },
    //What is the intended usage?
    {
        type: 'input',
        name: 'intendedUsage',
        message: 'What is the intended usage?',
    },
    //Contrubuting guidelines
    {
        type: 'input',
        name: 'contributingGuidelines',
        message: 'Please provide Contrubuting guidelines',

    },
    //Test instructions
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Please provide test instructions',

    },
    //Please provide your GitHub username
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Please provide your GitHub username',
    },
    //Please provide your email address
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error("Error writing file:", err);
        } else {
            console.log("README file has been generated successfully!");
        }
    });
}

// let readmeResult;

// TODO: Create a function to initialize app
function init() {

    // console.log("I am code BEFORE the async operation")
    // Gather User Info - Async Operation 
    inquirer.prompt(questions)
        .then(answers => {
            // console.log("I am code INSIDE the async operation")
            console.log("Data: ", answers)
            let results = generateMarkdown(answers);
        //    readmeResult = generateMarkdown(answers);
            console.log("ReadME scaffold: ", results); //ask what is happening here?
            writeToFile('README.md', results);
        })
        .catch(error => {
            console.log("Err: ", error);

        });

    
    // console.log("I am code AFTER the async operation")
}

// Function call to initialize app
init();




//use inquirer to gather information from the user
//use data gatherered to generate markdown
//export markdown from generateMarkdown.js
//use fs to write a README.md file
//a readme should be available

//use the names of questions to generate a table of contents
//test and ensure that the application is working as expected
//create video showing how to use the application
//move on with coding bootcamp