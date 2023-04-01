// TODO: Include packages needed for this application\
const { writeFileSync } = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input


function writeToFile(fileName, data) {
    const { title, link } = data;
    const readmeContent = `<lang="en">\n<##${title}>\n<#${link}>`;
    try {
      writeFileSync(fileName, readmeContent);
      console.log('Successfully wrote to', fileName);
    } catch (err) {
      console.error(err);
    }
  }

// TODO: Create a function to write README file
const promptUser = () => {
    return inquirer.prompt([
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
  ])
  
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then((answers) => {
    writeToFile('PersonalReadME.txt', answers);
  })
  .catch((error) => {
    console.error(error);
  });}

// Function call to initialize app
init();
