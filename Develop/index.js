// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');

// const writeToFile = require('./writeToFile');




// TODO: Create an array of questions for user input
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "path",
            message: "What is the project path?",
        },
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache 2.0",
                "BSD"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
}

const questions = async () => {
    const answers = await promptUser();
    return answers;
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`File ${fileName} has been saved.`);
    });
}


// const fileName = 'README.md';
// const readmeContent = generateMarkdown(data); 

// writeToFile(fileName, readmeContent);
// TODO: Create a function to initialize app
async function init() {
    try {
        // Prompt user for input
        const answers = await promptUser();
        
        // Generate README content based on user input
        const readmeContent = generateMarkdown(answers);

        // Write README content to file
        const fileName = 'README.md';
        const filePath = path.join(answers.path, fileName);
        writeToFile(filePath, readmeContent);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

module.exports = { questions, writeToFile, init };

// Function call to initialize app
init();
