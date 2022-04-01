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

 './test/specs/iOS/ios-todo-item-screen*.js'
 ];

// ============
// Capabilities
// ============
 config.capabilities = [   {
    platformName: "ios",
    "appium:deviceName":"iPhone 11",
    "appium:automationName": "XCUITest",
    "appium:app":path.join(process.cwd(),"./app/iOS/MVCTodo.app"),
    "appium:autoGrantPermissions":true
    
    }]
config.services= ['chromedriver','appium'];

exports.config = config;