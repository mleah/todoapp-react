import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions/actions.js'


class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const todoElement = this.props.list.map((todo, index) =>
            <li key={index} onClick={() => this.props.onTodoClick(index)}>{todo.text}</li>
        );

        return (
            <ul>
                {todoElement}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)