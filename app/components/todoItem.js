import React, { PropTypes } from 'react'


const TodoItem = ({ onClick, completed, text }) => (
    <div onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>
        {text}
    </div>
)

TodoItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem