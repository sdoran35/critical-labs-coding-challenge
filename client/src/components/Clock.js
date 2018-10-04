/**
 * @author Sean Doran
 * @description This file contains the Clock component.
 */
import React from "react";
import ClockDisplay from "./Clock/ClockDisplay";

export default  class Clock extends React.Component {

    constructor(props) {
        super(props);


    }




    /**
     * This is where React will render the DOM
     * @returns {*}
     */
    render() {


        return (

            <div>
                <ClockDisplay   handleChange={this.props.handleChange} checked={this.props.checked}  time={this.props.time} data={this.props.data}/>



            </div>
        );

    }

}