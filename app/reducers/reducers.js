import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO } from '../actions/actions.js'

const initialTodos = [
    {text: "Learn React", completed: false},
    {text: "Learn Redux", completed: true},
    {text: "Learn ES6" , completed: false},
    {text: "Learn typescript", completed: false}
    ];

function todos(state = initialTodos, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}


const todoApp = combineReducers({
    todos
})

export default todoApp