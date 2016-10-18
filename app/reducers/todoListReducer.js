import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SORT_TODO_LIST } from '../actions/todoListActions.js'
import { SortTypes } from '../actions/sortActions.js'
// import _sortBy from "lodash/fp/sortBy";
// import moment from 'moment/moment.js';

const initialTodos = [
    {id: 1, text: "Learn React", completed: false, dueDate: "", completedOn: false},
    {id: 2, text: "Learn Redux", completed: true, dueDate: "2016-12-12", completedOn: "2016-10-10"},
    {id: 3, text: "Learn ES6", completed: false, dueDate: "2016-01-01", completedOn: false},
    {id: 4, text: "Learn typescript", completed: false, dueDate: "2016-12-01", completedOn: false},
    {id: 5, text: "Learn Node", completed: false, dueDate: "", completedOn: false},
    {id: 6, text: "Hello World", completed: true, dueDate: "2016-11-12", completedOn: "2016-10-11"},
    {id: 7, text: "Fizzbuzz", completed: true, dueDate: "2016-11-01", completedOn: "2016-10-13"},
    {id: 8, text: "bleep bloop", completed: true, dueDate: "2017-2-13", completedOn: "2016-10-13"},
    {id: 9, text: "foo", completed: true, dueDate: "2016-12-30", completedOn: "2016-10-13"},
    {id: 10, text: "bar", completed: false, dueDate: "2016-11-23", completedOn: false}
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
                    dueDate: action.dueDate,
                    completedOn: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        completedOn: !todo.completed ? getCurrentDay() : false,
                        completed: !todo.completed
                    })
                }
                return todo
            });

        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);


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

function getCurrentDay() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();

    if(dd<10) dd='0'+dd;

    if(mm<10) mm='0'+mm;

    return yyyy + "-" + mm + "-" + dd;
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

export default todos

