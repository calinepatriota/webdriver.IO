const {config} = require('./wdio.shared.conf');
const path = require('path');

//
// ====================
// Runner Configuration
// ====================
//
config.port= 4723;
config.path= '/wd/hub';

// ============
// Specs
// ============
config.specs =[

 //'./test/specs/android/delete-note-screen*.js'
 'test/specs/android/add-note-screen.spec.js'
 ];

// ============
// Capabilities
// ============
 config.capabilities = [  
            {
    platformName: "Android",
    "appium:deviceName":"Pixel 4 API 31",
    "appium:automationName": "UIAutomator2",
    "appium:app":path.join(process.cwd(),"app/android/ColorNote+Notepad.apk"),
    "appium:autoGrantPermissions":true
            }
 ]
 config.services= ['chromedriver','appium'];

exports.config = config;