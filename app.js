const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// array of manager question for user
const questions = [ 
    {
        type: 'input',
        message: "What is your manager's name?",
        name: 'Manager name',
    },
    {
        type: 'input',
        message: "What is your manager's id?",
        name: 'Manager id',
    },
    {
        type: 'input',
        message: "What is your manager's office number?",
        name: 'Manager number',
    },
    {
        type: 'list',
        message: 'What type of team member would you like to add?',
        name: 'teamMember',
        choices: ['Engineer','Intern',"I don't want to add any more team members"],
    }
    
];

//array of engineer questions for user
const secondaryQuestionsEngineer = [ 
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'engineerName',
    },
    {
        type: 'input',
        message: "What is the engineer's id?",
        name: 'engineerId',
    },
    {
        type: 'input',
        message: "What is engineer's GitHub account?",
        name: 'engineerGithub',
    },
    {
        type: 'list',
        message: 'What type of team member would you like to add?',
        name: 'teamMember',
        choices: ['Engineer','Intern',"I don't want to add any more team members"],
    }
    
];

const secondaryQuestionsIntern = [ 
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'engineerName',
    },
    {
        type: 'input',
        message: "What is the intern's id?",
        name: 'engineerId',
    },
    {
        type: 'input',
        message: "What is intern's school?",
        name: 'engineerGithub',
    },
    {
        type: 'list',
        message: 'What type of team member would you like to add?',
        name: 'teamMember',
        choices: ['Engineer','Intern',"I don't want to add any more team members"],
    }
    
];

//function for secondary Engineer questions
function secondaryEngineer(){
    inquirer
        .prompt(secondaryQuestionsEngineer)
        .then((data) => {
            if (data.teamMember === "Engineer"){
                secondaryEngineer();
            }
            else if (data.teamMember === "Intern"){
                secondaryIntern();
            }
            else{
                console.log("finish");
            }
        });
}

//function for secondary Intern questions
function secondaryIntern(){
    inquirer
        .prompt(secondaryQuestionsIntern)
        .then((data) => {
            if (data.teamMember === "Engineer"){
                secondaryEngineer();
            }
            else if (data.teamMember === "Intern"){
                secondaryIntern();
            }
            else{
                console.log("finish");
            }
        });
}

// function to initialize questions
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            if (data.teamMember === "Engineer"){
                secondaryEngineer();
            }
            else if (data.teamMember === "Intern"){
                secondaryIntern();
            }
            else{
                console.log("finish");
            }
        });
}



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// function call to initialize program
init();
