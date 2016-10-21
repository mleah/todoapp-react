import { TOGGLE_TODO, DELETE_TODO, TOGGLE_IS_FETCHING, RECEIVE_TODO_LIST, FAILURE_TODO_LIST } from '../actions/todoListActions.js'
// import _sortBy from "lodash/fp/sortBy";
// import moment from 'moment/moment.js';


function todoList(state = {
    isFetching: false,
    items: [],
    lastUpdated: null,
    error: null
}, action) {
    switch (action.type) {

        case TOGGLE_TODO:
            let toggledTodoList = state.items.map((todo) => {
                if (todo.dateAdded === action.id) {
                    return Object.assign({}, todo, {
                        completedOn: !todo.completed ? getCurrentDay() : false,
                        completed: !todo.completed
                    })
                }
                return todo
            });

            return Object.assign({}, state, { items: toggledTodoList});

        case DELETE_TODO:
            let updatedTodoList = state.items.filter(todo => todo.dateAdded !== action.id);
            return Object.assign({}, state, { items: updatedTodoList});


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

function getCurrentDay() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();

    if(dd<10) dd='0'+dd;

    if(mm<10) mm='0'+mm;

    return yyyy + "-" + mm + "-" + dd;
}


export default todoList

