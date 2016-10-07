import { connect } from 'react-redux'
import { toggleTodo } from '../actions/actions.js'
import TodoList from './todoList.js'


const mapStateToProps = (state) => {
    return {
        list:  state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

const ToDoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default ToDoListContainer