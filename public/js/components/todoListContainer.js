import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../actions/todoListActions.js'
import { getSortedAndFilteredTodoList } from '../selectors/todoListSelectors.js'
import TodoList from './todoList.js'


const mapStateToProps = (state) => {
    return {
        list:  getSortedAndFilteredTodoList(state),
        isFetching: state.todoList.isFetching,
        error: state.todoList.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        },
        onDeleteClick: (id) => {
            dispatch(deleteTodo(id))
        }
    }
};

const ToDoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default ToDoListContainer