const logger = require('simple-node-logger'),
    opts = {
        logFilePath:"./Open-Channel.log",
        timestampFormat:'DD-MM-YYYY HH:mm:ss.SSS'
        
    },
log = logger.createSimpleLogger( opts );

export default log;