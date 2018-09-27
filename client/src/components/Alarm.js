import React from "react";

export default class Alarm extends React.Component {
    constructor(props) {
        super();
        this.state = { alarms: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/alarms')
            .then(results => {
                return results.json();

            }).then(data => {
                let alarms = data.results.map((alarms) => {
                    return(
                        <table>
                            <tr>
                                <th key={alarms.results}/>
                            </tr>
                        </table>
                    )
                })

        })
    }

    render() {


        return (
          <div className="container2">
              <div className="container1">
                  {this.state.alarms}
              </div>

          </div>
        );
    }
}