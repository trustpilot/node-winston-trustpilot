'use strict';

const logger = require('console');
const serializeError = require('serialize-error');

const LogstashConsole = function (options) {
  this.logger = logger;
  this.options = options || {};
  this.name = 'logstashConsole';
};

const isObject = function(item) {
  return Object.keys(item).length === 0 && item.constructor === Object;
};

LogstashConsole.prototype.log = function (level, msg, metadata, callback) {
  const defaultData = {
    timestamp: new Date().toJSON(),
    message: msg,
    level: level
  };

  if (!isObject(metadata)) {
    metadata = {
      metadata
    };
  };

  const data = Object.assign({}, metadata, this.options, defaultData);
  const logMessage = JSON.stringify(serializeError(data));
  this.logger.log(logMessage);
  callback(null, true);
};

module.exports = LogstashConsole;
