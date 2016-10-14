import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox';

const TodoItem = ({ onTodoClick, onDeleteClick, completed, text, dueDate }) => {

    const customStyling = {background: completed ? 'lightgrey' : 'none', color: completed ? 'darkgrey' : 'inherit'};

    return (
        <div className="todoItem">
            <span className="todoItemClick" onClick={onTodoClick} style={customStyling}>
                <Checkbox className="completedCheckbox" checked={completed}/>
                <span className="todoText">{text}</span>
                <span>{dueDate}</span>
            </span>
            <RaisedButton className="deleteTodoButton" onClick={onDeleteClick}>Delete</RaisedButton>
        </div>
    )
};

TodoItem.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default TodoItem