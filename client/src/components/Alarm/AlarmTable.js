import React from "react";
import AlarmHeader from "./AlarmHeader";
import AlarmCell from "./AlarmCell";

export default class AlarmTable extends React.Component {

    constructor() {
        super();
    }


    render() {
        return (
            <div>
                <AlarmHeader/>

                <AlarmCell/>
                <AlarmCell/>
                <AlarmCell/>
                <AlarmCell/>
                <AlarmCell/>
                <AlarmCell/>
                <AlarmCell/>


            </div>
        );


    }

}