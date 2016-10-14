import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ToDoListContainer from './todoListContainer.js'
import AddItemFormContainer from './addItemFormContainer.js'
import SortTodoForm from './sortTodo.js'
import FilterTodoForm from './filterToDo.js'


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (

    <MuiThemeProvider>
        <div className="appContainer">
            <AddItemFormContainer />
            <ToDoListContainer />
            <SortTodoForm />
            <FilterTodoForm />
        </div>
    </MuiThemeProvider>
);

export default App