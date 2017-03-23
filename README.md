# winston-trustpilot

[![Build Status](https://travis-ci.org/trustpilot/node-winston-trustpilot.svg?branch=master)](https://travis-ci.org/trustpilot/node-winston-trustpilot) [![npm](https://img.shields.io/npm/v/winston-trustpilot.svg)](https://www.npmjs.com/package/winston-trustpilot)

Package to keep different Winston components/settings that are being used at Trustpilot.

```javascript
npm install --save winston winston-trustpilot
```

An example of usage

```javascript
const Winston = require('winston');
const tpWinston = require('winston-trustpilot');
const logger = new Winston.Logger({
    level: 'info',
    transports: [tpWinston.transports.default()]
});
```
