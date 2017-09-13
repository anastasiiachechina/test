exports.config = {
  
    specs: [
        __dirname + '/specs/*.js'
    ],
    services: ['selenium-standalone'],
    
    capabilities: [{
        browserName: 'chrome'
    }],
    
    baseUrl: 'https://www.booking.com',
    
    waitforTimeout: 150000,
    
    connectionRetryTimeout: 90000,
    
    connectionRetryCount: 3,
    
    framework: 'jasmine',
    jasmineNodeOpts: {
    defaultTimeoutInterval: 2500000
    },

    
};