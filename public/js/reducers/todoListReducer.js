import { TOGGLE_IS_FETCHING, RECEIVE_TODO_LIST, FAILURE_TODO_LIST } from '../actions/todoListActions.js'
import { SortTypes } from '../actions/sortActions.js'
import moment from 'moment'

function todoList(state = {
    isFetching: false,
    items: [],
    lastUpdated: null,
    error: null
}, action) {
    switch (action.type) {

        case TOGGLE_IS_FETCHING:
            return Object.assign({}, state, {
                isFetching: true
            });

        case RECEIVE_TODO_LIST:
            return Object.assign({}, state, {
                isFetching: false,
                items: handleUTCTimestamps(action.listItems),
                lastUpdated: action.receivedAt,
                error: null
            });

        case FAILURE_TODO_LIST:
            console.log("FAILURE uh oh  ", action.error);
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error.error
            });

        default:
            return state
    }
}

const handleUTCTimestamps = (todoArray) => {
    return todoArray.map(todo => {
        todo.dateAdded = todo.dateAdded ? convertUTCtoDate(todo.dateAdded) : todo.dateAdded;
        todo.dueDate = todo.dueDate ? convertUTCtoDate(todo.dueDate) : todo.dueDate;
        todo.completedOn = todo.completedOn ? convertUTCtoDate(todo.completedOn) : todo.completedOn;
        return todo;
    })

};

const convertUTCtoDate = (incomingUTC) => {
    return moment(incomingUTC).format('YYYY-MM-DD');
};

export default todoList



export const getSortedAndFilteredTodoList = (state, currentSort, visibility ) => {
    const sortedArray = sortToDos(state.items, currentSort);
    return filterVisibleTodos(sortedArray, visibility);
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

const filterVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed);
    }
};


export const getWeeklyCompletedTodos = (currentWeekArray, state) => {
    console.log(currentWeekArray);
    return currentWeekArray.map( day =>
        state.items.filter( todo =>
            (todo.completedOn === day )).length)
};


//ToDo refactor the boolean logic in mapActiveTodos

export const getWeeklyActiveTodos = (currentWeekArray, state) => {
    return currentWeekArray.map( day =>
        state.items.filter( todo =>
            (
                (isActive(todo) && onOrAfterCreationDate(todo.dateAdded, day)) ||
                (!isActive(todo) && beforeCompletionDate(todo.completedOn, day) && onOrAfterCreationDate(todo.dateAdded, day))
            )
        ).length)
};


const isActive = (todo) => todo.completedOn === null;


const beforeCompletionDate = (dateCompleted, currentDayOfWeek) => {
    let todoDateCompleted = new Date(dateCompleted);
    let currentDate = new Date(currentDayOfWeek);
    return currentDate < todoDateCompleted;
};


const onOrAfterCreationDate = (dateAdded, currentDayOfWeek) => {
    let todoDateAdded = new Date(dateAdded);
    let currentDate = new Date(currentDayOfWeek);
    return currentDate >= todoDateAdded;
};