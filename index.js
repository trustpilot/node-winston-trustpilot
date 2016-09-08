'use strict';

const transports = require('./transports');

module.exports.transports = transports;

module.exports.transports.default = function (options) {
    const result = [];
    if (process.env.NODE_ENV === 'development') {
        result.push(new transports.DevConsole(options));
    } else {
        result.push(new transports.LogstashConsole(options));
    }
    return result;
};

