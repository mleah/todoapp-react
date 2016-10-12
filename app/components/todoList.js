import React, { PropTypes } from 'react'
import TodoItem from './ToDoItem.js'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const todoElement = this.props.list.map((todo, index) =>
            <TodoItem key={todo.id} {...todo}
                      onTodoClick={() => this.props.onTodoClick(todo.id)}
                      onDeleteClick={() => this.props.onDeleteClick(todo.id)}
            />
        );

        return (
            <div className="todoListContainer">
                {todoElement}
            </div>
        );
    }
}

TodoList.propTypes = {
    list: PropTypes.array.isRequired,
    onTodoClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
};

export default TodoList