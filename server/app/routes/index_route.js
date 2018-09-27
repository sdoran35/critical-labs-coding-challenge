/**
 * This route is just the verify that the ExpressJS server is running.
 * @param app
 */
module.exports = function (app) {
    app.get('/', function (req, res) { //Tell ExpressJS where to serve the content to.
        res.send('Hello World!')
    });
};


