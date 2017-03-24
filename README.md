# winston-trustpilot

[![Build Status](https://travis-ci.org/trustpilot/node-winston-trustpilot.svg?branch=master)](https://travis-ci.org/trustpilot/node-winston-trustpilot) [![npm](https://img.shields.io/npm/v/winston-trustpilot.svg)](https://www.npmjs.com/package/winston-trustpilot)

Kibana friendly logger for Trustpilot projects.

## Installation

```javascript
npm install winston winston-trustpilot --save
```

## Getting Started

Base implemention of the logger:

```javascript
const Winston = require('winston');
const tpWinston = require('winston-trustpilot');
const logger = new Winston.Logger({
    level: 'info',
    transports: [tpWinston.transports.default()]
});
```
