import React from "react";
import Alarm from "../Alarm";

export default class ClockData extends React.Component {

    constructor(props) {
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
        const meme = "sefefefwfwf";
        return (
            <div>


                <h2>
                    {this.state.time.toLocaleTimeString()}
                    <br/>
                    {this.state.time.toDateString()}
                    <br/>

                </h2>



            </div>
        );


    }

}