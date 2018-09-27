import React from "react";

export default class ClockData extends React.Component {

    constructor() {
        super();
        this.state = {
            time: new Date()

        }
    }

    /**
     * This method will set a new time.
     */
    currentTime() {
        this.setState({
            time: new Date()
        })
    }

    /**
     * This is where the time will update every second.
     * This creates a clock.
     */
    componentWillMount() {
        setInterval(() => this.currentTime(), 1000)
    }

    render() {
        return (
            <div>


                <h2>
                    {this.state.time.toLocaleTimeString()}
                </h2>

            </div>
        );


    }

}