import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../actions/todoListActions.js'
import TodoList from './todoList.js'
import { SortTypes } from '../actions/sortActions.js'

const sortAndFilterTodoList = (state) => {
    const sortedArray = sortToDos(state.todoList.items, state.currentSort);
    return getVisibleTodos(sortedArray, state.visibilityFilter);
};

const sortToDos = (todoArray, sortType) => {

    if (sortType !== SortTypes.DATE_ADDED) {
        return sortByDate(sortType, todoArray);
    }

    return todoArray.sort((firstToDo, secondToDo) => firstToDo.id - secondToDo.id);
};


const sortByDate = (sortType, todoArray)  => {
    return todoArray.slice().sort((firstToDo, secondToDo) => {
        const [dueDateOne, dueDateTwo] = [firstToDo, secondToDo].map(todo => {
            let date = new Date(todo.dueDate);
            if (date == "Invalid Date") {
                date = -Infinity;
            }
            return date;
        });

        return sortType === SortTypes.DUE_DATE_ASC ? dueDateOne - dueDateTwo : dueDateTwo - dueDateOne;
    });
};

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
        list:  sortAndFilterTodoList(state),
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