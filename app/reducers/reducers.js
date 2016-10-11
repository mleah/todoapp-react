import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SORT_TODO_LIST, SortTypes} from '../actions/actions.js'
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
            if(action.sortType === SortTypes.DUE_DATE_ASC) {
                console.log("INSIDE SORT TODO LIST");
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


function currentSort(state = SortTypes.NO_SORT, action) {
    if (action.newSort){
        return action.newSort
    } else {
        return state
    }
}

const todoApp = combineReducers({
    todos,
    currentSort
});

export default todoApp