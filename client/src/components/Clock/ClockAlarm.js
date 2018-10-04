import React from "react";


export default class ClockAlarm extends React.Component {

    constructor(props) {
        super(props);

    }




    render() {
        const isLoaded = this.props.isLoaded;
        const data = this.props.data;
        const error = this.props.error;
        //const day = this.props.data.alarmTime;
//console.log(day);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
        return (
            <div>

                <table>
                    {data.map(item => (


                        <tr>

                            <th>
                                {item.alarmDay}
                            </th>
                            <tr>
                                {item.alarmTime}
                            </tr>


                        </tr>


                    ))}
                </table>
            </div>
        );
        }
    }
}