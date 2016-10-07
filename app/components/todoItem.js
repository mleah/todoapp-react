import React, { PropTypes } from 'react'

const TodoItem = ({ onClick, completed, text }) => {

    const customStyling = {textDecoration: completed ? 'line-through' : 'none'};

    return <div className="todoItem" onClick={onClick} style={customStyling}> {text} </div>
}

TodoItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem