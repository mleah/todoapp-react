import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../actions/actions.js'
import TodoList from './todoList.js'


const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed);
    }
};

const mapStateToProps = (state) => {
    return {
        list:  getVisibleTodos(state.todos, state.visibilityFilter)
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