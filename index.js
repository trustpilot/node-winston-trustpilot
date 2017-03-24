'use strict';

const transports = require('./transports');

module.exports.transports = transports;

module.exports.transports.default = function (options) {
  if (process.env.NODE_ENV === 'development') {
    return new transports.DevConsole(options);
  } else if (process.env.NODE_ENV === 'test') {
    return { log: () => {}};
  } else {
    return new transports.LogstashConsole(options);
  }
};

