import React from "react";

export default class Alarm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            alarms: null,
        };
    }

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
                        <li key={item.name}>
                            {item.day} {item.time}
                        </li>
                    ))}
                </table>
                </div>
            );
        }
    }
}