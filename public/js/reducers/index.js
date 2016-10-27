import { combineReducers } from 'redux'
import todoList, * as fromTodoList from './todoListReducer.js'
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

export const getSortedAndFilteredTodoList = (state) =>
    fromTodoList.getSortedAndFilteredTodoList(state.todoList, state.currentSort, state.visibilityFilter);