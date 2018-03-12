const config = require("./protractor.conf").config;

config.capabilities = {
  browserName: "chrome"
};

exports.config = config;
