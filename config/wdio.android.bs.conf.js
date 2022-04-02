require('dotenv').config()
const {config} = require('./wdio.shared.conf');

// ============
// Allure Report
// ============
config.reporters = [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

// ============
// Browserstack Credentials
// ============
config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_ACCESS_KEY;

// ============
// Specs
// ============
config.specs =[
       // './test/specs/android/delete-note-screen*.js'
       'test/specs/android/**',
 ];

// ============
// Capabilities
// ============
 config.capabilities = [  
            {
    platformName: "Android",
    "appium:deviceName":"Samsung Galaxy S22 Ultra",
    "appium:automationName": "UIAutomator2",
    "appium:app":"bs://fcb833944e78641318b2378b5c8e7f90f324f0cb",
    "appium:autoGrantPermissions":true
            }
 ]
 config.services = ['browserstack'];

 exports.config = config;