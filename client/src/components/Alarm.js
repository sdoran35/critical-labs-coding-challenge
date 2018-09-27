/**
 * @author Sean Doran
 * @description This file contains the Alarm component.
 * This component is also where the data is first received from NodeJS.
 * Afterwards it will be passed around different components to make it dynamic.
 * This will allow for the user to add or hide alarms for certain weeks.
 */
import React from "react";

export default class Alarm extends React.Component {
    /**
     * This is the constructor for the class.
     * @param props
     */
    constructor(props) {
        super();
        this.state = {
            alarms: null,
        };
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
     * This is where the Alarm component will render the DOM.
     * @returns {*}
     */
    render() {
        const { error, isLoaded, days, name} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    {name.map(name => (
                        <p>{name.name}</p>
                    ))}
                    <table>
                        {days.map(item => (
                            <tr>
                                <th key={item.day}>
                                </th>
                                <tr>
                                {item.day} {item.time}
                                </tr>
                            </tr>
                        ))}
                    </table>
                </div>
            );
        }
    }
}