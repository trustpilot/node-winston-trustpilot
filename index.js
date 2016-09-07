'use strict';

const winston = require('winston');
const logger = require('console');

const levels = {
    crit: 0,
    error: 1,
    warn: 2,
    notice: 3,
    info: 4,
    debug: 5
};

const consoleOpts = {
    colorize: true,
    prettyPrint: true,
    depth: 3
};

winston.addColors({
    crit: 'magenta',
    error: 'red',
    warn: 'yellow',
    notice: 'cyan',
    info: 'white',
    debug: 'grey'
});

const KibanaFriendlyConsole = winston.transports.KibanaFriendlyConsole = function (options) {
    this.options = options || {};
    this.name = 'kibanaFriendlyConsole';
    this.level = this.options.level || 'warn';
};

Object.assign(KibanaFriendlyConsole.prototype, winston.Transport);

KibanaFriendlyConsole.prototype.log = function (level, msg, metadata, callback) {
    const defaultData = {
        timestamp: new Date().toJSON(),
        message: msg,
        level: level
    };

    const data = Object.assign({}, metadata, this.options, defaultData);
    logger.log(JSON.stringify(data));
    callback(null, true);
};

function loggerFactory(options) {
    const transports = [];
    if (process.env.NODE_ENV === 'development') {
        transports.push(new winston.transports.Console(Object.assign(consoleOpts, options)));
    } else {
        transports.push(new KibanaFriendlyConsole(options));
    }
    return new winston.Logger({
        levels: levels,
        transports: transports
    });
}

const kibanaLogger = loggerFactory();
kibanaLogger.Logger = loggerFactory;
kibanaLogger.Transport = KibanaFriendlyConsole;

module.exports = kibanaLogger;
