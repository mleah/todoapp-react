import React from 'react'
import ToDoListContainer from './todoListContainer.js'
import AddItemFormContainer from './addItemFormContainer.js'
import SortTodoForm from './sortTodoForm.js'
import Footer from './filter.js'

const App = () => (
    <div className="appContainer">
        <AddItemFormContainer />
        <ToDoListContainer />
        <SortTodoForm />
        <Footer />
    </div>
);

export default App