import log from "../log/logger";
const express = require('express');
const app  = express();

app.use(express.json());
app.post('/', (req: any, res: any) =>{
    log.info(`Incoming Request: \n ${req.method} \n ${JSON.stringify(req.body)}`);
    res.send("Request logged on Open-Channel.log");
})

export default app;