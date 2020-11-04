// function to generate markdown for README
function generateMarkdown(data) {
  return `
# Project title ${data.Title}
## Developer Profile
[This Link] (https://github.com/${data.username})
### Table of Contents
*[Contact](#Contact)
*[Description](#Description)
*[Installation](#Installation)
*[Usage](#Usage)
*[License](#License)
*[Contributor](#Contributor)
*[Test](#Test)
## Contact 
${data.Email}
## Description 
${data.Description}
## Installation 
${data.Installation}
## Usage 
${data.Usage}
## License 
${data.License} 
![GitHub license](https://img.shields.io/badge/license-${data.License}-blue.svg)
## Contributor 
${data.Contributor}
## Test
${data.Test}
`;
}
module.exports = generateMarkdown;