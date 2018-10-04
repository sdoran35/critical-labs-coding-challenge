/**
 * This is where the data is stored for the current alarms.
 * @type {{name: {id: number, name: string, age: number}[], days: *[]}}
 */

const myObj = {

    "days": [

        { id: 1, alarmDay: 'Sunday', alarmTime: 'No Alarm' },
        {id: 2, alarmDay: 'Monday', alarmTime: 7},
        {id: 3, alarmDay: 'Tuesday', alarmTime: 9},
        {id: 4, alarmDay: 'Wednesday', alarmTime: 9},
        { id: 5, alarmDay: 'Thursday', alarmTime: '7:45' },
        { id: 6, alarmDay: 'Friday', alarmTime: '8:15' },
        { id: 7, alarmDay: 'Saturday', alarmTime: 'No Alarm' },

    ]
};

module.exports = myObj;

