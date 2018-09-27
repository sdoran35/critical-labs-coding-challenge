import React from "react";


import Footer from "../components/Footer";
import Header from "../components/Header";
import Clock from "../components/Clock";

import Alarm from "../components/Alarm";


export default class Layout extends React.Component {




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