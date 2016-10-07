import React, { PropTypes } from 'react'

const TodoItem = ({ onTodoClick, onDeleteClick, completed, text }) => {

    const customStyling = {background: completed ? 'lightgrey' : 'none', color: completed ? 'darkgrey' : 'inherit'};

    return (
        <div className="todoItem">
            <span className="todoItemClick" onClick={onTodoClick} style={customStyling}>
                <input className="completedCheckbox" type="checkbox" checked={completed}/>
                <span className="todoText">{text}</span>
            </span>
            <button className="deleteTodoButton" onClick={onDeleteClick}>Delete</button>
        </div>
    )
}

TodoItem.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem