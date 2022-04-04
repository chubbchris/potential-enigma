// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions =  markdownData =>{
    return inquirer.prompt([
       {    
        type:'input',
        name:'title',
        message:'What is the name of your project? (required)',
        validate: titleInput =>{
            if(titleInput){
                return true;
            } else {
                console.log('Enter name for your project.')
                return false;
            }
        }
       },
        {
           type: 'input',
           name: 'discription',
           message: 'How would you discribe your project? (required)',
           validate: discriptionInput =>{
               if(discriptionInput){
                   return true
               }else{
                   console.log('Enter discription.')
               }
           }
        },
        {
            type:'input',
            name:'content',
            message:'What content do you have in your README ?',
            validate: contentInput=>{
                if(contentInput){
                    return true
                }else {
                    return console.log ('Enter section centent')
                }
            }
        },
        {
            type:'input',
            name:'installInstructions',
            message:'How do I install your application?'
        },
        {
            type:'input',
            name:'link',
            message:'Enter github url link to the repository you app is in?'
        },
        {
           type:'input',
           name:'usageInfo',
           message:'How do you use your application?'
        },
        {
            type:'input',
            name:'contributingGuidelines',
            message:'How do I  contribute to your project?'
        },
        {
            type:'input',
            name:'test',
            message: 'How do we test your application?',
        },
        {
            type:'list',
            name:'license',
            message:'Select the licenses that the application is using',
            choices:['none','MIT license','BSD liciense','AGPL','Creative Commons','The Unliciense','GPLv2'],
        },
        {
            type:'input',
            name:'githubLink',
            message:'Enter your Github Url link'
        },
        {
            type:'input',
            name:'email',
            message:'Enter  your email address'

        },
    ]);
};


questions()
.then( (markdownData) => {
    const readmeText = generateMarkdown(markdownData)

    fs.writeFile('README.md',readmeText,err=>{
        if (err) throw err;
    console.log('README.md created! check out the README.md to see output!')
});
});


