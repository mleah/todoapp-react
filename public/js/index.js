import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducers/index.js'
import App from './components/app.js'
import thunk from 'redux-thunk';
import 'babel-polyfill'
import fetch from 'isomorphic-fetch'

let store = createStore(todoApp, applyMiddleware(thunk));

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)


fetch('http://localhost:3000/api')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(api) {
        console.log(api);
        return api;
    });

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


