# node-trustpilot-logger
A Kibana friendly logger for node projects running in docker or lambda 

An example of usage
```javascript
const trustpilotLogger = require('./index');
const Winston = require('winston');
const logger = new Winston.Logger({
    level: 'info',
    transports: trustpilotLogger.default()
});
```
