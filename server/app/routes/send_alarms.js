/**
 * This is the route that will send data from the model to the React client.
 * @type {{name: {id: number, name: string, age: number}[], days: *[]}}
 */
const data = require('../model/alarms');
module.exports = function(app) {
    app.get('/alarms', (req, res) => { //Tell ExpressJS where to serve the content to.

        res.send(data); //Send the data out to the server.
    });
};