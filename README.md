# node-winston-trustpilot
Package to keep different winston components/settings that is being used at Trustpilot

An example of usage
```javascript
const Winston = require('winston');
const tpWinston = require('winston-trustpilot');
const logger = new Winston.Logger({
    level: 'info',
    transports: tpWinston.transports.default()
});
```
