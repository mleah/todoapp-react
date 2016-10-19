import { combineReducers } from 'redux'
import todos from './todoListReducer.js'
import currentSort from './currentSortReducer.js'
import visibilityFilter from './filterReducer.js'

const todoApp = combineReducers({
    todos,
    currentSort,
    visibilityFilter
});

export default todoApp