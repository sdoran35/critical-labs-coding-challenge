/**
 * This is where the data is stored for the current alarms.
 * @type {{name: {id: number, name: string, age: number}[], days: *[]}}
 */


const myObj = {
    name: [
        {id: 1, name: "Johnny", age: 20},

    ],
    days: [
        { id: 1, day: 'Sunday', time: 'No Alarm' },
        { id: 2, day: 'Monday', time: '7' },
        { id: 3, day: 'Tuesday', time: '9' },
        { id: 4, day: 'Wednesday', time: '9' },
        { id: 5, day: 'Thursday', time: '7:45' },
        { id: 6, day: 'Friday', time: '8:15' },
        { id: 7, day: 'Saturday', time: 'No Alarm' },

    ]
};

module.exports = myObj;

