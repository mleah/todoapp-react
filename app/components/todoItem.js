import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox'
import { Row, Col } from 'react-flexbox-grid'

const TodoItem = ({ onTodoClick, onDeleteClick, completed, text, dueDate }) => {

    const customStyling = {background: completed ? 'lightgrey' : 'none', color: completed ? 'darkgrey' : 'inherit'};

    return (
        <li className="todoItem">
            <Row center="xs">
                <Col xs={3} ><Checkbox className="completedCheckbox" checked={completed} onClick={onTodoClick}/></Col>
                <Col xs={6}><span className="todoText" style={customStyling}>{text}</span> <br />
                    <span style={customStyling}>{dueDate}</span></Col>
                <Col xs={3}><RaisedButton className="deleteTodoButton" onClick={onDeleteClick}>Delete</RaisedButton></Col>
            </Row>
        </li>
    )
};

TodoItem.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default TodoItem