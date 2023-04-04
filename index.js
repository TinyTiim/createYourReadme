// TODO: Include packages needed for this application\
const { writeFileSync } = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input


const questions = [
    {
        type:'input',
        name:'title',
        message:'What is your repository title?',
    },
    {
        type:'input',
        name:'link',
        message:'What is the link to your live repository?',
    },
    {
        type:'input',
        name:'description',
        message:'Describe your repository.',
    },
    {
        type:'input',
        name:'installation',
        message:'What installtions did you use for your repository?',
    },
    {
        type:'input',
        name:'usage',
        message:'What is your repository used for? Describe who can use this.',
    },
    {
        type:'input',
        name:'credits',
        message:'What have you used credit-wise to make this repository?',
    },
    {
        type:'input',
        name:'license',
        message:'What license are you using?',
    },
    {
      type:'input',
      name:'username',
      message:'What is your github username for your contact info?',
  },
  {
    type:'input',
    name:'email',
    message:'What is your email for your contact info?',
},
]


const promptUser = () => {
  return inquirer.prompt(questions);
};

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
  try {
    writeFileSync(fileName, generateMarkdown(answers));
    
    console.log('Successfully wrote to', fileName);
  } catch (err) {
    console.error(err);
  }
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then((answers) => {
    writeToFile('PersonalReadME.md', answers);
  })
  .catch((error) => {
    console.error(error);
  });
}

// Function call to initialize app
init();