import React, { PropTypes } from 'react'
import Todo from './ToDoItem.js'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const todoElement = this.props.list.map((todo, index) =>
            <div
                key={index}
                onClick={() => this.props.onTodoClick(index)}
            >{todo.text}</div>
        );

        return (
            <div>
                {todoElement}
            </div>
        );
    }
}

TodoList.propTypes = {
    list: PropTypes.array.isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList