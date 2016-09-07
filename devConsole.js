'use strict';

let winston;
try {
    winston = require('winston');
} catch (error) {
    winston = null;
}

module.exports = function (options) {
    if (process.env.NODE_ENV === 'development' && winston !== null) {
        return new winston.transports.Console(
            Object.assign({
                colorize: true,
                prettyPrint: true,
                align: true,
                depth: 3
            }, options));
    } else {
        return { log: function () { } };
    }
};

