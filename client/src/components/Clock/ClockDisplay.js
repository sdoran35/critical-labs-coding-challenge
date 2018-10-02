import React from "react";
import ClockData from "./ClockData";
import Switch from "react-switch";

export default class ClockDisplay extends React.Component {

    constructor(props) {


        super();
        this.state = {

            checked: false,
            alarmOn: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked,alarmOn) {
        this.setState({
            checked,
            alarmOn

        });


    }




    render() {
        return (
            <div>
                <ClockData/>


                <label htmlFor="normal-switch">

                    <Switch
                        onChange={this.handleChange}
                        checked={this.state.checked}
                        id="normal-switch"
                    />
                </label>

            </div>
        );


    }

}