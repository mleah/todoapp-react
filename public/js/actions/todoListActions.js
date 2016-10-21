import fetch from 'isomorphic-fetch'

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const RECEIVE_TODO_LIST = 'RECEIVE_TODO_LIST';
export const FAILURE_TODO_LIST = 'FAILURE_TODO_LIST';



export function deleteTodo(id) {
    return {type: DELETE_TODO, id}
}

export function toggleIsFetching(todoList) {
    return {
        type: TOGGLE_IS_FETCHING,
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

        dispatch(toggleIsFetching());

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


export function addTodo(text, dueDate) {

    let newTodo = {
        dateAdded: Date.now(),
        text: text,
        completed: false,
        dueDate: dueDate,
        completedOn: false
    };

    return function (dispatch) {

        dispatch(toggleIsFetching());

        return fetch('http://localhost:3000/api', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'text/json'
            }),
            body: JSON.stringify(newTodo)
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                dispatch(receiveToDoList(json));
            })
            .catch(function(error){
                dispatch(failureToDoList(error));
            });
    }
}


export function toggleTodo(id) {

    return function (dispatch) {

        dispatch(toggleIsFetching());

        return fetch('http://localhost:3000/api/todo/' + id + '/toggleComplete', {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'text/json'
            })
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                dispatch(receiveToDoList(json));
            })
            .catch(function(error){
                dispatch(failureToDoList(error));
            });
    }
}

