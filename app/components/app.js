import React from 'react'
import ToDoListContainer from './todoListContainer.js'
import AddItemForm from './addItemForm.js'

const App = () => (
    <div className="appContainer">
        <AddItemForm />
        <ToDoListContainer />
    </div>
)


export default App