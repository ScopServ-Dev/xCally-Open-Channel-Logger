import env from "./env/env.config";
import app from "./src/api/api";
import log from "./src/log/logger";

try{
    log.info("Starting Express Server");
    app.listen(env.port, () =>{
        log.info(`Express Server Running on http://localhost:${env.port}`);
    });
}catch(SERVER_FAILED){
    log.error(`Express Server Failed with error: \n ${SERVER_FAILED}`);
}