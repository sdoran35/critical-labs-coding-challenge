import React from "react";
import ClockData from "./ClockData";
import Switch from "react-switch";
import ClockAlarm from "./ClockAlarm";

export default class ClockDisplay extends React.Component {

    constructor(props) {


        super(props);


    }








    render() {
        return (
            <div>
                <ClockData time={this.props.time}/>


                <ClockAlarm data={this.props.data}/>


                <label htmlFor="normal-switch">

                    <Switch
                        onChange={this.props.handleChange}
                        checked={this.props.checked}
                        id="normal-switch"
                    />
                </label>

            </div>
        );


    }

}