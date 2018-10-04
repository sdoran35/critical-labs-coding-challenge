/**
 * @author Sean Doran
 * @description This file contains the Alarm component.
 * This component is also where the data is first received from NodeJS.
 * Afterwards it will be passed around different components to make it dynamic.
 * This will allow for the user to add or hide alarms for certain weeks.
 */
import React from "react";
import AlarmHeader from "./Alarm/AlarmHeader";


export default class Alarm extends React.Component {
    /**
     * This is the constructor for the class.
     * @param props
     */
    constructor(props) {
        super(props);


    }


    /**
     * This is where the Alarm component will render the DOM.
     * @returns {*}
     */
    render() {
        const isLoaded = this.props.isLoaded;
        const data = this.props.data;
        const error = this.props.error;


        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <AlarmHeader/>
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