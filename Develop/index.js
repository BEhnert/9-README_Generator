// // array of questions for user
// const questions = [

// ];

//like generateHtml from 40
// // function to write README file
// function writeToFile(fileName, data) {
// }


// // function to initialize program
// function init() {

// }

//like promptUser from 40
// // function call to initialize program
// init();

const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");
const mdGen = require('./utils/generateMarkdown')

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
return inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of project?",
    default: "ReadMe Test"
  },
  {
    type: "input",
    name: "description",
    message: "Please write a description of the project.",
    default: "Good vibrations"
  }, 
  {
    type: "input",
    name: "instructions",
    message: "What are the installation instructions??",
    default: "Push Play"
  }, 
  {
    type: "input",
    name: "usage",
    message: "What is the usage of the project?",
    default: "Fun"
  },
  {
    type: "input",
    name: "contributions",
    message: "Were there any notable outside contributions for this project?",
    default: "God"
  },
  {
    type: "input",
    name: "test",
    message: "How is this project tested?",
    default: "Carefully"
  },
  {
    type: "checkbox",
    message: "Choose a license for the project.",
    name: "license",
    choices: [
      "HTML", 
      "CSS", 
      "JavaScript", 
      "MySQL"
    ]
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
    default: "BEhnert"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    default: "behnert77@gmail.com"
  }
])};

//   {
//     type: "list",
//     message: "What is your preferred method of communication?",
//     name: "contact",
//     choices: [
//       "email",
//       "phone",
//       "telekinesis"
// //     ]
// ]).then(function(data) {

//   var filename = data.title.toUpperCase().split(' ').join('') + ".json";

//   fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

//     if (err) {
//       return console.log(err);
//     }

//     console.log("Success!");

//   });
// });


async function init() {
    console.log("hi")
    try {
      const answers = await promptUser();
  
      var filename = answers.title.toUpperCase().split(' ').join('') + ".md";
      const readme = mdGen(answers);
  
      await writeFileAsync(filename, readme);
  
      console.log("Successfully wrote a new README Markdown file");
    } catch(err) {
      console.log(err);
    }
  }
  
  init();
  