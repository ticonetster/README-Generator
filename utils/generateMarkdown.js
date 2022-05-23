// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache 2.0":
      return licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
      break;
    case "BSD 3-Clause":
      return licenseBadge =  "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
      break;
    case "GPLv2":
      return licenseBadge = "[![License](https://img.shields.io/badge/License-GPL_v2-blue.svg)]";
      break;
    case "GPLv3":
      return licenseBadge =  "[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      break;
    case "MIT":
      return licenseBadge = "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      break;
    default:
      return licenseBadge = "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "Apache":
      return licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "BSD 3-clause":
      return licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "GPLv2":
      return licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
      break;
    case "GPLv3":
      return licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "MIT":
      return licenseLink = "https://opensource.org/licenses/MIT";
      break;
    default:
      return licenseLink = "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);
  return `${licenseBadge}(${licenseLink})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `   # ${data.name}
  ## Description
  ${data.description}
   ## Table of Contents
  -[Installation](#installation)\n
  -[Usage](#usage)\n
  -[Tests](#tests)\n
  -[License](#license)\n
  -[Credits](#credits)\n
  -[Questions](#questions)
   ## Installation
   ${data.install}
   ## Usage
   ${data.usage}
   ## Tests 
   ${data.test}
   ## License 
   ${renderLicenseSection(data.license)}
   ## Credits 
   ${data.credit}
   ## Questions 
   Email: ${data.email}\n
   GitHub User: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
