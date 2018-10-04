import React from "react";


export default class ClockData extends React.Component {

    constructor(props) {
        super(props);

    }




    render() {

        return (
            <div>


                <h2>
                    {this.props.time.toLocaleTimeString()}
                    <br/>
                    {this.props.time.toDateString()}
                    <br/>

                </h2>



            </div>
        );


    }

}