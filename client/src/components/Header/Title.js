/**
 * @author Sean Doran
 * @description This file contains the Title component.
 */
import React from "react";


export default class Title extends React.Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
}