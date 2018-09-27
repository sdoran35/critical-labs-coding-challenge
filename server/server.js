// server.js
/**
 * This is the main ExpressJS Server.
 * Here is where the server is started, and all required files are loaded.
 * @type {createApplication}
 */
const express = require('express'); //We need to import the express package to create a NodeJS App.
const bodyParser = require('body-parser'); //Not sure if I will need a body-parser for this project.
const app = express(); //Create a new ExpressJS app here.
const port = 3001;  //We use port 3001 instead of default 3000, because the React client is running on port 3000

require('./app/routes/send_alarms')(app, {}); //This is the route we use to send the alarm data to the React client.
require('./app/routes/index_route')(app, {}); //This is the index ExpressJS route.
app.use(function (req, res, next) { //This is to allow React to access the server across localhost.
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.listen(port, () => {
    console.log('We are live on ' + port);
});