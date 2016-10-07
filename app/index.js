import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers/reducers.js'
import App from './components/app.js'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions/actions.js'

let store = createStore(todoApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

