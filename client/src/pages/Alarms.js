import React from "react";

import Alarm from "../components/Alarm";
import * as TodoActions from "../actions/TodoActions";
import AlarmStore from "../stores/AlarmsStore";


export default class Alarms extends React.Component {
    constructor() {
        super();
        this.getTodos = this.getTodos.bind(this);
        this.state = {
            todos: AlarmStore.getAll(),
        };
    }

    componentWillMount() {
        AlarmStore.on("change", this.getAlarms);
    }

    componentWillUnmount() {
        AlarmStore.removeListener("change", this.getTodos);
    }

    getTodos() {
        this.setState({
            todos: AlarmStore.getAll(),
        });
    }

    reloadTodos() {
        TodoActions.reloadTodos();
    }

    render() {
        const { todos } = this.state;

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo}/>;
        });

        return (
            <div>
                <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
                <h1>Todos</h1>
                <ul>{TodoComponents}</ul>
            </div>
        );
    }
}