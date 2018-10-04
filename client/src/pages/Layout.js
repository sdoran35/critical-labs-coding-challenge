/**
 * @author Sean Doran
 * @description This file contains the Layout component.
 * This is where all the other components are put together.
 */
import React from "react";


import Footer from "../components/Footer";
import Header from "../components/Header";
import Clock from "../components/Clock";

import Alarm from "../components/Alarm";


export default class Layout extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            checked: false,
            isLoaded : false,
            error: null,
            data: null,

            time: new Date()
        };
        this.handleChange = this.handleChange.bind(this);


    }


    /**
     * This will handle the alarm switch
     * @param checked
     */
    handleChange(checked) {

        this.setState({
            checked

        });

    }





    /**
     * This will set the current time and date.
     */
    currentTime() {
        this.setState({
            time: new Date()
        })
    }

    /**
     * This will update the current time and date.
     */
    componentWillMount() {
        setInterval(() => this.currentTime(), 1000)
    }

    /**
     * This will fetch the alarm data from NodeJS
     */
    componentDidMount() {
        fetch("http://localhost:3001/alarms")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({

                        isLoaded: true,
                        data: result.days



                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    /**
     * This will render the main overall DOM
     * @returns {*}
     */
    render() {
        const title = "Critical Labs Alarm";





        return (
            <div>


                <Header title={title}/>
                <hr width="50%"/>

                <Clock title={title} handleChange={this.handleChange} checked={this.state.checked} time={this.state.time} data={this.state.data} />

                <hr width="50%"/>

                <Alarm  isLoaded={this.state.isLoaded} error={this.state.error} data={this.state.data}/>

                <Footer/>
            </div>
        );
    }
}