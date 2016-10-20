import fetch from 'isomorphic-fetch'

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const REQUEST_TODO_LIST = 'REQUEST_TODO_LIST';
export const RECEIVE_TODO_LIST = 'RECEIVE_TODO_LIST';



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
        type: REQUEST_TODO_LIST, todoList}
}


export function receiveToDoList(todoList, jsonResponse) {
    return {
        type: RECEIVE_TODO_LIST,
        todoList,
        listItems: jsonResponse.todos,
        receivedAt: Date.now()
    }
}

export function fetchToDoList() {

    return function (dispatch) {

        dispatch(requestToDoList());

        return fetch('http://localhost:3000/api')
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                    //dispatch action for failed fetching
                    //there must be a more elegant way to handle a bad response....
                    //maybe do this in a catch block at the end of promise chain?
                }

                return response.json();
            })
            .then(function(response) {
                console.log(response);
                dispatch(receiveToDoList(subreddit, response))
            });
    }
}



//state for requested todoList
// toDoList : {
//     isFetching: false,
//     didInvalidate: false,
//     lastUpdated: Date.now() //some timestamp
//     listItems: [
//         {
//             dateAdded: 1,
//             text: "Learn React",
//             completed: false,
//             dueDate: "",
//             completedOn: false}
//     ]
// }
