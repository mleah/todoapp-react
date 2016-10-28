import { TOGGLE_IS_FETCHING, RECEIVE_TODO_LIST, FAILURE_TODO_LIST } from '../actions/todoListActions.js'
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
