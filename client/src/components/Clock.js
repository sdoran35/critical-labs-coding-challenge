/**
 * @author Sean Doran
 * @description This file contains the Clock component.
 */
import React from "react";

export default  class Clock extends React.Component {
    /**
     * This is the constructor for the Clock component.
     */
    constructor(){
        super();
        this.state ={time:new Date()}
    }

    /**
     * This method will set a new time.
     */
    currentTime(){
        this.setState({
            time: new Date()
        })
    }

    /**
     * This is where the time will update every second.
     * This creates a clock.
     */
    componentWillMount(){
        setInterval(() =>this.currentTime(),1000)
    }

    /**
     * This is where React will render the DOM
     * @returns {*}
     */
    render() {
        return (
            <h1>
                {this.state.time.toLocaleTimeString()}

            </h1>

        );

    }

}