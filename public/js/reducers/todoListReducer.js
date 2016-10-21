import { TOGGLE_IS_FETCHING, RECEIVE_TODO_LIST, FAILURE_TODO_LIST } from '../actions/todoListActions.js'
// import _sortBy from "lodash/fp/sortBy";
// import moment from 'moment/moment.js';


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
            console.log("ACtion in reducer ", action);
            return Object.assign({}, state, {
                isFetching: false,
                items: action.listItems,
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

export default todoList

