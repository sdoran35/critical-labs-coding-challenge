// send_alarms.js
const data = require('../model/alarms');
module.exports = function(app) {
    app.get('/alarms', (req, res) => {
        // You'll create your note here.
        res.send(data);
    });
};