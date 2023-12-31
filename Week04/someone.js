
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const Routes = require('./routes/index');

const port = process.env.PORT || 8080;
const app = express(); 

app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    /*.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
        );
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        next();
    })*/
    .use('/', Routes);

process.on('uncaughtException', (err, origin) => {
    console.log(process.stderr.id, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
});

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log('Connected to DB and listening on ' + port);
    }
})
