const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");
const mdGen = require('./utils/generateMarkdown')

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
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
      name: "contributing",
      message: "Were there any notable outside contributions for this project?",
      default: "God"
    },
    {
      type: "input",
      name: "tests",
      message: "How is this project tested?",
      default: "Carefully"
    },
    {
      type: "checkbox",
      message: "Choose a license for the project.",
      name: "license",
      choices: [
        {
          name: "Apache License 2.0",
          value: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        },
        {
          name: "Eclipse Public License 1.0",
          value: "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
        },
        {
          name: "MIT License",
          value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        },
        {
          name: "GNU GPL v3",
          value: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        }
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
  ])
};


async function init() {
  try {
    const answers = await promptUser();

    // var filename = answers.title.toUpperCase().split(' ').join('') + ".md";
    var filename = "README_Sample.md";
    const readme = mdGen(answers);

    await writeFileAsync(filename, readme);

    console.log("Successfully wrote a new README Markdown file");
  } catch (err) {
    console.log(err);
  }
}

init();
