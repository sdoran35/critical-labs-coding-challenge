import React from "react";
import ClockData from "./ClockData";
import Switch from "react-switch";

export default class ClockDisplay extends React.Component {

    constructor(props) {


        super();


    }




    render() {
        return (
            <div>
                <ClockData/>


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