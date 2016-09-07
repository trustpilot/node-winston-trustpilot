'use strict';

const KibanaConsole = require('./KibanaConsole');
const DevConsole = require('./DevConsole');

module.exports.default = function (options) {
    return [new KibanaConsole(options), new DevConsole(options)];
};
module.exports.KibanaConsole = KibanaConsole;
module.exports.DevConsole = DevConsole;
