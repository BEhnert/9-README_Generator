// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  

  # Title
  ${answers.title}
  
  ### Description
  ${answers.description}

  ##### Table of Contents

   [Installation](#installation)
   [Usage](#usage)
   [License](#license)
   [Contributing](#contributing)
   [Tests](#tests)
   [Questions](#questions)
  
  ### Installation
  ${answers.instructions}

  ### Usage
  ${answers.usage}

  ### License
  ${answers.license}
 
  ### Contributing
  ${answers.contributing}

  ### Tests
  ${answers.tests}

  ### Questions
       GitHub - <add link here ${answers.github}
       [a link](https://github.com/${answers.github})
      
       For additional questions, please email me at: ${answers.email}
      [a link](mailto:${answers.email})

 
`;
}

module.exports = generateMarkdown;
