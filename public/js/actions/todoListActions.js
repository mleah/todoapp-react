import fetch from 'isomorphic-fetch'

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const REQUEST_TODO_LIST = 'REQUEST_TODO_LIST';
export const RECEIVE_TODO_LIST = 'RECEIVE_TODO_LIST';
export const FAILURE_TODO_LIST = 'FAILURE_TODO_LIST';



export function addTodo(text, dueDate) {
    return { type: ADD_TODO, text, dueDate }
}

export function toggleTodo(id) {
    return { type: TOGGLE_TODO, id }
}

export function deleteTodo(id) {
    return {type: DELETE_TODO, id}
}


export function requestToDoList(todoList) {
    return {
        type: REQUEST_TODO_LIST,
        todoList}
}


export function receiveToDoList(jsonResponse) {
    return {
        type: RECEIVE_TODO_LIST,
        listItems: jsonResponse.todos,
        receivedAt: Date.now()
    }
}

export function failureToDoList(error) {
    return {
        type: FAILURE_TODO_LIST,
        error: error

    }
}

export function fetchToDoList() {

    return function (dispatch) {

        dispatch(requestToDoList());

        return fetch('http://localhost:3000/api')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                dispatch(receiveToDoList(json))
            })
            .catch(function(error){
                dispatch(failureToDoList(error));
            });
    }
}
