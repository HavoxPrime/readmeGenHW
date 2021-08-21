// things we need
const inq = require("inquirer");
const fs = require("fs");
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What does your project do?",
    name: "desc",
  },
  {
    type: "input",
    message: "How do you install your project?",
    name: "install",
  },
  {
    type: "input",
    message: "How do you use your project?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the contributions guidelines for your project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "How do you test your project?",
    name: "test",
  },
  {
    type: "list",
    message: "What license does your project have?",
    name: "license",
    choices: ["MIT", "Mozilla 2.0", "GNU GPLv3"],
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "gitUser",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
];

inq
  .prompt(questions)

  .then((response) => {
    const filename = `${response.title}.md`;
    fs.writeFile(`./outputReadme/README.md`, generateReadme(response), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

function generateReadme(ans) {
  let readmeFile;
  readmeFile = `# ${ans.title} ![license badge](${getbage(ans.license)})\n\n`;
  readmeFile += `## Table of Contents\n-[### Discreption](#discreption)\n-[###Installation](#installation)\n-[###Usage](#usage)\n-[###Contribution Guidlines](#contribution-guidlines)\n-[###Test instructions](#test-instructions)\n-[###License](#license)\n-[###Questions](#questions)\n`;
  readmeFile += `## Discreption\n${ans.desc}\n`;
  readmeFile += `## Instalation\n${ans.install}\n`;
  readmeFile += `## Usage\n${ans.usage}\n`;
  readmeFile += `## Contribution Guidlines\n${ans.contribution}\n`;
  readmeFile += `## Test Instructions\n${ans.tests}\n`;
  readmeFile += `## License\n This project is licensed under the terms of the ${ans.license}.\n`;
  readmeFile += `## Questions\n My github: [${ans.gitUser}](https://github.com/${ans.gitUser})\n My email: ${ans.email}\n`;
  return readmeFile;
}

function getbage(lic) {
  if (lic === "Mit") {
    return "https://img.shields.io/badge/License-Mit-brightgreen";
  } else if (lic === "Mozilla 2.0") {
    return "https://img.shields.io/badge/License-Mozilla%202.0-blue";
  } else {
    return "https://img.shields.io/badge/License-GNU%20GPLv3-blue";
  }
}
