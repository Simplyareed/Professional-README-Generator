

function renderLicenseBadge(license) {
  switch (license){
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      case "BSD":
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license){
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0"
      case "BSD":
        return "https://opensource.org/licenses/BSD-3-Clause"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  This project is licensed under the [${license}](${renderLicenseLink(license)}) License.`
}

function generateMarkdown(data) {
  return `
<h1 align="center">${data.projectTitle} 👋</h1> 

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please contact ${data.username} via email: ${data.email}.
`;
}

//need to export the generateMarkdown function 
module.exports = generateMarkdown;