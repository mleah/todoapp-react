import { combineReducers } from 'redux'
import todoList from './todoListReducer.js'
import currentSort from './currentSortReducer.js'
import visibilityFilter from './filterReducer.js'
import currentWeekDates from './currentWeekDatesReducer.js'

const todoApp = combineReducers({
    todoList,
    currentSort,
    visibilityFilter,
    currentWeekDates
});

export default todoApp