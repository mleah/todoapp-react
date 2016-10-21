import fetch from 'isomorphic-fetch'

export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const RECEIVE_TODO_LIST = 'RECEIVE_TODO_LIST';
export const FAILURE_TODO_LIST = 'FAILURE_TODO_LIST';


export function fetchToDoList() {
    return apiCallThunk(fetch('http://localhost:3000/api'));
}


export function addTodo(text, dueDate) {

    let newTodo = {
        dateAdded: Date.now(),
        text: text,
        completed: false,
        dueDate: dueDate,
        completedOn: false
    };

    return apiCallThunk(fetch('http://localhost:3000/api', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'text/json'
            }),
            body: JSON.stringify(newTodo)
        })
    );
}


export function toggleTodo(id) {

    return apiCallThunk(fetch('http://localhost:3000/api/todo/' + id + '/toggleComplete', {method: 'PUT'}));
}


export function deleteTodo(id) {

    return apiCallThunk(fetch('http://localhost:3000/api/todo/' + id , {method: 'DELETE'}));
}


export function apiCallThunk(fetchCall) {

    return function (dispatch) {

        dispatch(toggleIsFetching());

        return fetchCall
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

