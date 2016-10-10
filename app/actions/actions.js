/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SORT_TODO_LIST = 'SORT_TODO_LIST';

/*
 * action creators
 */

export function addTodo(text, dueDate) {
    return { type: ADD_TODO, text, dueDate }
}

export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
}

export function deleteTodo(index) {
    return {type: DELETE_TODO, index}
}

export function sortTodos(sortType) {
    return { type: SORT_TODO_LIST,  sortType}
}

