// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

  

// TODO: Create a function to generate markdown for README
module.exports = templateData => {
  const {...readme}=templateData
 
return`
#${readme.title}
**${readme.discription}**
##contents 
**${readme.content}**

## How to install application
${readme.installInstructions}
${readme.link}
## How to use application
${readme.usageInfo}
## How to test application
${readme.test}

## How I can be contacted for Questions 
${readme.githubLink}
${readme.email}


${readme.content}
## Licenses
${readme.license}

`
}

