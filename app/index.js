import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers/index.js'
import App from './components/app.js'


let store = createStore(todoApp);

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


