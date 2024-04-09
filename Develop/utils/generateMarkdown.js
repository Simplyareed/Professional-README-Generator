

function generateMarkdown(data) {
  return `
<h1 align="center">${data.projectTitle} 👋</h1> 

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} License.

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