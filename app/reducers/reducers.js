import {combineReducers} from 'redux'
import {ADD_TODO, TOGGLE_TODO, DELETE_TODO, SORT_TODO_LIST, SortTypes, FilterTypes, SET_VISIBILITY_FILTER} from '../actions/actions.js'
// import _sortBy from "lodash/fp/sortBy";
// import moment from 'moment/moment.js';

const initialTodos = [
    {id: 1, text: "Learn React", completed: false, dueDate: ""},
    {id: 2, text: "Learn Redux", completed: true, dueDate: "2016-12-12"},
    {id: 3, text: "Learn ES6", completed: false, dueDate: "2016-01-01"},
    {id: 4, text: "Learn typescript", completed: false, dueDate: "2016-12-01"}
];

function todos(state = initialTodos, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: Date.now(),
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

            if (action.sortType !== SortTypes.DATE_ADDED) {
                return sortByDate(action.sortType, newState);
            }

            return newState.sort((firstToDo, secondToDo) => firstToDo.id - secondToDo.id);

        default:
            return state
    }
}

function sortByDate(sortType, newState) {
    return newState.sort((firstToDo, secondToDo) => {
        const [dueDateOne, dueDateTwo] = [firstToDo, secondToDo].map(todo => {
            let date = new Date(todo.dueDate);
            if (date == "Invalid Date") {
                date = -Infinity;
            }
            return date;
        });

        return sortType === SortTypes.DUE_DATE_ASC ? dueDateOne - dueDateTwo : dueDateTwo - dueDateOne;
    });

}


function currentSort(state = SortTypes.DATE_ADDED, action) {
    if (action.newSort) {
        return action.newSort
    } else {
        return state
    }
}


function visibilityFilter(state = FilterTypes.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:

            return action.filterType;

        default:
            return state
    }

}

const todoApp = combineReducers({
    todos,
    currentSort,
    visibilityFilter
});

export default todoApp