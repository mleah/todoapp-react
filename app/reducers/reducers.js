import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SORT_TODO_LIST } from '../actions/actions.js'
// import _sortBy from "lodash/fp/sortBy";
// import moment from 'moment/moment.js';

const initialTodos = [
    {text: "Learn React", completed: false, dueDate: ""},
    {text: "Learn Redux", completed: true, dueDate: "2016-12-12"},
    {text: "Learn ES6" , completed: false, dueDate: "2016-01-01"},
    {text: "Learn typescript", completed: false, dueDate: "2016-12-01"}
    ];

function todos(state = initialTodos, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false,
                    dueDate: action.dueDate
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            });

        case DELETE_TODO:
            return state.filter((item, index) => index !== action.index);


        case SORT_TODO_LIST:
            const newState = Object.assign([], state);
            if(action.sortType === "due_date_asc") {

                let sortedArray = newState.sort(function (firstToDo, secondToDo) {
                    return new Date(secondToDo.dueDate) - new Date(firstToDo.dueDate);
                });

                return sortedArray;
            }

            return state;

        default:
            return state
    }
}


const todoApp = combineReducers({
    todos
});

export default todoApp