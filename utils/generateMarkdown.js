

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }


let badge = "";
switch(license) {
  case "MIT":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache 2.0":
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPL 3.0":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    default:
      badge = "";
}

  return badge;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return "";
  }

  let link = "";
  switch (license) {
    case "MIT":
      link = "https://opensource.org/licenses/MIT";
      break;
    case "Apache 2.0":
      link = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GPL 3.0":
      link = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    default:
      link= "";
  }

  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return "";
  }
  return `
  This project is licensed under the ${license} license. 
  See the [LICENSE](./LICENSE) file for details.`;
  }
// TODO: Create a function to generate markdown for README

//This function allows me to create the layout as well as putting the awnsers from index.js into the layout.
function generateMarkdown(data) {
  const { title, link, description, installation, usage, credits, license, username, email } = data;

  return `# ${title} ${renderLicenseBadge(license)}

  # ${link}

  ## Description

  ${description}

  ## Table of Contents

  -[Installation](#installation)
  -[Usage](#usage)
  -[Credits](#credits)
  -[License](#license)
  -[Contact](#contact)

  ## Installation

  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## Credits
  
  ${credits}
  
  ## License
  
  ${renderLicenseSection(license)}

  ## Contact

  Any questions or concerns here is my contact info below.

  -Github: [@${username}](https://github.com/${username})
  -Email ${email};
`;
}

module.exports = generateMarkdown;
