export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SORT_TODO_LIST = 'SORT_TODO_LIST';



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