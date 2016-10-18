import React, { PropTypes } from 'react'
import TodoItem from './ToDoItem.js'
import { Row } from 'react-flexbox-grid'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const todoElement = this.props.list.map((todo, index) =>
            <TodoItem key={todo.dateAdded} {...todo}
                      onTodoClick={() => this.props.onTodoClick(todo.dateAdded)}
                      onDeleteClick={() => this.props.onDeleteClick(todo.dateAdded)}
            />
        );

        return (
            <Row className="todoListContainer">
                <ul>
                    {todoElement}
                </ul>
            </Row>
        );
    }
}

TodoList.propTypes = {
    list: PropTypes.array.isRequired,
    onTodoClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
};

export default TodoList