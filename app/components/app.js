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


const {Grid, Row, Col} = require('react-flexbox-grid');


const App = () => (

    <MuiThemeProvider>
        <Grid>
            <Row>
                <Col xs={3}>
                    <AddItemFormContainer />
                </Col>
                <Col xs={3}>
                    <SortTodoForm />
                    <FilterTodoForm />
                </Col>
            </Row>
            <Row>
                <ToDoListContainer />
            </Row>
        </Grid>
    </MuiThemeProvider>
);

export default App
