// server.js
const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
const port = 3001;

require('./app/routes/send_alarms')(app, {});
app.listen(port, () => {
    console.log('We are live on ' + port);
});