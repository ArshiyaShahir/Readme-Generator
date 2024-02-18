const fs = require("fs");
const utils = require('./Starter/utils');
const inquirer = require("inquirer");
const generateMarkdown = require("./Starter/utils/generateMarkdown");

// array of questions for user
// const questions = [

// ];
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'section',
      message: 'what is the Sections entitled:',
    //   name: 'stack',
      choices: ['Description', 'Table of Contents', 'installation', 'usage', 'license', 'contribution', 'test', 'questions'],
    },
    
  ]) 


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(fileName)
        console.log(data)
        if(err){
            return console.log(err)    
        }else{
            console.log("success")
        }
    })
}
// fs.readFile('data.csv', 'utf8', (error, data) =>
//   error ? console.error(error) : console.log(data)
// );

// function to initialize program

function init () {
    inquirer.prompt(questions)
    .then((data) => {   
        fs.writeToFile("README.md", generateMarkdown, data);
    })
    .catch((err) => {
        console.log(err);
    })
}
// function call to initialize program
init();
