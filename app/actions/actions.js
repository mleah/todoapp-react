/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SORT_TODO_LIST = 'SORT_TODO_LIST';
export const CURRENT_SORT = 'CURRENT_SORT';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


/*
 * other constants
 */

export const SortTypes = {
    DATE_ADDED: 'DATE_ADDED',
    DUE_DATE_ASC: 'DUE_DATE_ASC',
    DUE_DATE_DESC: 'DUE_DATE_DESC'
};


export const FilterTypes = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};


/*
 * action creators
 */

export function addTodo(text, dueDate) {
    return { type: ADD_TODO, text, dueDate }
}

export function toggleTodo(id) {
    return { type: TOGGLE_TODO, id }
}

export function deleteTodo(id) {
    return {type: DELETE_TODO, id}
}

export function sortTodos(sortType) {
    return { type: SORT_TODO_LIST,  sortType}
}

export function currentSort(newSort) {
    return {type: CURRENT_SORT, newSort}
}

export function setVisibilityFilter(filterType) {
    return { type: SET_VISIBILITY_FILTER, filterType }
}

