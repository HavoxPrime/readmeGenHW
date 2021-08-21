// things we need
const inq = require("inquirer");
const fs = require("fs");
const gen = require("./res/makeReadme.js");
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
    fs.writeFile(filename, gen.generateReadme(response), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

//https://img.shields.io/github/license/{GITHUB USER HERE}/{GITHUB REPO HERE}?style=for-the-badge
