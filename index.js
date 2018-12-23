#!/usr/bin/env node

/*
 * The above line is neede so that node recognizes 
 * this as a CLI script!
 */
/*jshint esversion: 6 */

const cliCFonts = require('cfonts');
const cliInquirer = require('inquirer');
const cliOpn = require('opn');
const businessCardData = require('./data/business-card-data.json');


const Actions = {
    LinkedIn() { cliOpn(businessCardData.socialMedia.LinkedIn.url); },
    Twitter() { cliOpn(businessCardData.socialMedia.Twitter.url); },
    Xing() { cliOpn(businessCardData.socialMedia.Xing.url); },
    GitHub() { cliOpn(businessCardData.socialMedia.GitHub.url); },
    SAPCommunity() { cliOpn(businessCardData.socialMedia.SAPCommunity.url); },
    Work() { cliOpn(businessCardData.work.url); },
};

// Header
cliCFonts.say('lechnerc77', {
    align: 'center',
    font: 'simple',
    colors: ['candy'],
    background: 'transparent'
});

//SubHeader
cliCFonts.say(`${businessCardData.name}|${businessCardData.city}, ${businessCardData.country}|${businessCardData.work.role} @ ${businessCardData.work.organization}|(${businessCardData.focusAreas.topic1},${businessCardData.focusAreas.topic2},${businessCardData.focusAreas.topic3})`, {
    align: 'center',
    font: 'console',
    colors: ['yellowBright'],
    background: 'transparent'
});

//List with possible options for contact
cliInquirer
    .prompt([{
        type: 'list',
        name: 'choice',
        message: 'Check-me out at:',
        choices: [
            "LinkedIn",
            "Twitter",
            "Xing",
            "GitHub",
            "SAPCommunity",
            "Work"
        ]
    }])
    .then(answer => {
        console.log(answer.choice);
        Actions[answer.choice]();
        process.exitCode = 0;
    });