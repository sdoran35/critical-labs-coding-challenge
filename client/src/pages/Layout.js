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

    constructor(props){
        super();
        this.state = {
            alarms: null,
            checked : false
        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(checked){
        this.setState({checked});
    }


    /**
     * This method will fetch data and parse thru it.
     */
    componentDidMount() {

        fetch("http://localhost:3001/alarms")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({

                        isLoaded: true,
                        name: result.name,
                        days: result.days
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

                <Clock title={title}/>

                <hr width="50%"/>

                <Alarm/>

                <Footer/>
            </div>
        );
    }
}