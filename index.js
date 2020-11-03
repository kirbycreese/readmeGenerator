const inquirer = require ("inquirer");
const fs = require ("fs");
const generateMarkdown = require ("generateMarkdown")
// array of questions for user
const questions = [
    {
        type: "input",
        message: "Github username?",
        name: "username"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync("./responses/" + fileName, data , function(err){
        if(err){
            return console.log(err);
        }
        console.log("success, wrote: " + filename);
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        console.log(data)
        writeToFile("README.md", generatorMarkdown(data));
    })
}

// function call to initialize program
init();
