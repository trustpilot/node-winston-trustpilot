'use strict';

const logger = require('console');

const KibanaConsole = module.exports = function (options) {
    this.logger = logger;
    this.options = options || {};
    this.name = 'kibanaConsole';
};

KibanaConsole.prototype.log = function (level, msg, metadata, callback) {
    const defaultData = {
        timestamp: new Date().toJSON(),
        message: msg,
        level: level
    };

    const data = Object.assign({}, metadata, this.options, defaultData);
    this.logger.log(JSON.stringify(data));
    callback(null, true);
};
