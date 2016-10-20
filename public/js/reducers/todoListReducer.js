import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, REQUEST_TODO_LIST, RECEIVE_TODO_LIST } from '../actions/todoListActions.js'
// import _sortBy from "lodash/fp/sortBy";
// import moment from 'moment/moment.js';


const initialTodos = [
    {dateAdded: 1, text: "Learn React", completed: false, dueDate: "", completedOn: false},
    {dateAdded: 2, text: "Learn Redux", completed: true, dueDate: "2016-12-12", completedOn: "2016-10-10"},
    {dateAdded: 3, text: "Learn ES6", completed: false, dueDate: "2016-01-01", completedOn: false},
    {dateAdded: 4, text: "Learn typescript", completed: false, dueDate: "2016-12-01", completedOn: false},
    {dateAdded: 5, text: "Learn Node", completed: false, dueDate: "", completedOn: false},
    {dateAdded: 6, text: "Hello World", completed: true, dueDate: "2016-11-12", completedOn: "2016-10-11"},
    {dateAdded: 7, text: "Fizzbuzz", completed: true, dueDate: "2016-11-01", completedOn: "2016-10-13"},
    {dateAdded: 8, text: "bleep bloop", completed: true, dueDate: "2017-2-13", completedOn: "2016-10-13"},
    {dateAdded: 9, text: "foo", completed: true, dueDate: "2016-12-30", completedOn: "2016-10-13"},
    {dateAdded: 10, text: "bar", completed: false, dueDate: "2016-11-23", completedOn: false}
];

function todoList(state = {
    isFetching: false,
    items: initialTodos
}, action) {
    switch (action.type) {

        case ADD_TODO:

            return Object.assign({}, state, { items:  [
                    ...state.items,
                    {
                        dateAdded: Date.now(),
                        text: action.text,
                        completed: false,
                        dueDate: action.dueDate,
                        completedOn: false
                    }
                ]}
            );

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


        case REQUEST_TODO_LIST:
            return Object.assign({}, state, {
                isFetching: true
            });

        case RECEIVE_TODO_LIST:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.listItems,
                lastUpdated: action.receivedAt
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

