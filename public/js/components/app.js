import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ToDoListContainer from './todoListContainer.js'
import AddItemFormContainer from './addItemFormContainer.js'
import SortTodoForm from './sortTodo.js'
import FilterTodoForm from './filterToDo.js'
import ToDoChartContainer from './todoChartContainer.js'
import {Grid, Row, Col} from 'react-flexbox-grid'


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


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
                <Col xs ={6}>
                    <ToDoChartContainer />
                </Col>
            </Row>
            <Row>
                <ToDoListContainer />
            </Row>
        </Grid>
    </MuiThemeProvider>
);

export default App
