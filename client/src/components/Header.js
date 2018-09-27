/**
 * @author Sean Doran
 * @description This file contains the Header component.
 * It imports and uses the Title component inside of the DOM
 */
import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {


    /**
     * This is where the Header renders the DOM
     * @returns {*}
     */
    render() {
        return (
            <div>
                <Title title={this.props.title} />

            </div>
        );
    }
}