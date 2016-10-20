import { combineReducers } from 'redux'
import todoList from './todoListReducer.js'
import currentSort from './currentSortReducer.js'
import visibilityFilter from './filterReducer.js'

const todoApp = combineReducers({
    todoList,
    currentSort,
    visibilityFilter
});

export default todoApp