import React from 'react'
import ToDoListContainer from './todoListContainer.js'
import AddItemForm from './addItemForm.js'
import SortTodoForm from './sortTodoForm.js'

const App = () => (
    <div className="appContainer">
        <AddItemForm />
        <ToDoListContainer />
        <SortTodoForm />
    </div>
);

export default App