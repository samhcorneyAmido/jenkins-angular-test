const config = require("./protractor.conf").config;

config.capabilities = {
  browserName: "chrome",
  chromeOptions: {
    args: [
      "--no-sandbox",
      "--test-type=browser",
      "--disable-gpu",
      "--window-size=1280,1024",
      "--headless"
    ]
  }
};

exports.config = config;
