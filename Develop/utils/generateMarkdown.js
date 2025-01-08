// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'None') {
    return '';
  }
  const badges = {
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'GPLv3': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    'BSD 3-Clause': '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
  };
  return badges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  const links = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause'
  };
  return links[license] || '';
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License

This project is licensed under the ${license} license. For more information, please visit [this link](${renderLicenseLink(license)}).`;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("Incoming data:", data);
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## description
${data.description}

## Table of Contents

- [License](#license)
- [Installation Instructions](#installation-instructions)
- [Center](#center)
- [Color](#color)

## License
${data.license}


## Installation Instructions
${data.installationInstructions}

## Intended Usage
${data.intendedUsage}

## Contributing Guidelines
${data.contributingGuidelines}

## Test Instructions
${data.testInstructions}

## Questions
GitHub: ${data.githubUsername}

Email: ${data.email}

`;
}

export default generateMarkdown;

/*
module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown
}
*/