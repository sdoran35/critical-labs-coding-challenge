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
        super();

    }

    /**
     * This method will fetch data and parse thru it.
     */


    /**
     * This is where the Alarm component will render the DOM.
     * @returns {*}
     */
    render() {
        const { error, isLoaded, days} = this.props;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <AlarmHeader/>
                    <table>
                        {days.map(item => (


                            <tr>

                                <th>
                                    {item.day}
                                </th>
                            <tr>
                                {item.time}
                            </tr>


</tr>






                        ))}
                    </table>
                </div>
            );
        }
    }
}