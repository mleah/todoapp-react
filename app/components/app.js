import React from 'react'
import ToDoListContainer from './todoListContainer.js'
import AddItemFormContainer from './addItemFormContainer.js'
import SortTodoForm from './sortTodoForm.js'

const App = () => (
    <div className="appContainer">
        <AddItemFormContainer />
        <ToDoListContainer />
        <SortTodoForm />
    </div>
);

export default App