import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducers/index.js'
import App from './components/app.js'
import thunk from 'redux-thunk'
import 'babel-polyfill'
import { fetchToDoList } from './actions/todoListActions.js'


let store = createStore(
    todoApp,
    applyMiddleware(thunk)
);

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);


store.dispatch(fetchToDoList());


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


