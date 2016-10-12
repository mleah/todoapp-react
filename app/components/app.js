import React from 'react'
import ToDoListContainer from './todoListContainer.js'
import AddItemFormContainer from './addItemFormContainer.js'
import SortTodoForm from './sortTodo.js'
import FilterTodoForm from './filterToDo.js'

const App = () => (
    <div className="appContainer">
        <AddItemFormContainer />
        <ToDoListContainer />
        <SortTodoForm />
        <FilterTodoForm />
    </div>
);

export default App