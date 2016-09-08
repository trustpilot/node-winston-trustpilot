'use strict';

const logger = require('console');

const LogstashConsole = function (options) {
    this.logger = logger;
    this.options = options || {};
    this.name = 'logstashConsole';
};

LogstashConsole.prototype.log = function (level, msg, metadata, callback) {
    const defaultData = {
        timestamp: new Date().toJSON(),
        message: msg,
        level: level
    };

    const data = Object.assign({}, metadata, this.options, defaultData);
    this.logger.log(JSON.stringify(data));
    callback(null, true);
};

module.exports = LogstashConsole;
