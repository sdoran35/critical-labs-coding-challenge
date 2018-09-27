// send_alarms.js
const data = require('../model/alarms');
module.exports = function(app) {
    app.post('/alarms', (req, res) => {
        // You'll create your note here.
        res.send(data);
    });
};