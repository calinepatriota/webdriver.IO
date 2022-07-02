require('dotenv').config()
const {config} = require('./wdio.shared.conf');
const execSync = require('child_process').execSync;

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
    "appium:app":"bs://3784476dbb04f9323eb0efccf5f2ad6aa3d0c748",
    "appium:autoGrantPermissions":true
            }
 ]

  config.after= function (result, capabilities, specs) {
        execSync('allure generate allure-results --clean');  // the default is 'buffer'  
};

 config.services = ['browserstack'];

 exports.config = config;
