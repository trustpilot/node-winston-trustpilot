'use strict';

const transports = require('./transports');

module.exports.transports = transports;

module.exports.transports.default = function (options) {
    return [new transports.KibanaConsole(options), new transports.DevConsole(options)];
};

