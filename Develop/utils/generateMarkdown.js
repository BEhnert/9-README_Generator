// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  ##### Table of Contents

   [Title](#title)
   [Description](#description)
   [Installation](#installation)
   [Usage](#usage)
   [Contributing](#contributing)
   [Tests](#tests)
   [Questions](#questions)
   [License](#license)

  # Title
  # ${answers.title}

  ### Description
  ${answers.description}

  ### Instructions
  ${answers.instructions}

  ### Usage
  ${answers.usage}

  ### Contributing
  ${answers.contributing}

  ### Tests
  ${answers.tests}

  ### Questions
       GitHub - <add link here ${answers.github}

       For additional questions, please email me at: ${answers.email}

  #### License

    ${answers.license}
    
  Good Test of ReadMe file
  Will this write again?
`;
}

module.exports = generateMarkdown;
