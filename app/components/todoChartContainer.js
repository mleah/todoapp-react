import { connect } from 'react-redux'
import ToDoChart from './todoChart.js'


const weekArray = ['2016-10-10', '2016-10-11', '2016-10-12', '2016-10-13', '2016-10-14', '2016-10-15', '2016-10-16'];


const mapCompletedTodos = (todos) => {
    return weekArray.map( day =>
    //ToDo Extract and name each filter function
        todos.filter( todo =>
            todo.completedOn === day ).length)
};

const mapActiveTodos = (todos) => {
    return weekArray.map( day =>
        //ToDo Extract and name each filter function
        todos.filter( todo =>
            ( isActive(todo) || isCompletedInFuture(todo.completedOn, day) )).length)
};


const isActive = (todo) => todo.completedOn === false;

const isCompletedInFuture = (dateCompleted, dayOfWeek) => {
    let todoDateCompleted = new Date(dateCompleted);
    let currentDate = new Date(dayOfWeek);

    return currentDate < todoDateCompleted;
};


const mapStateToProps = (state) => {
    return {
        weeklyCompletedToDos:  mapCompletedTodos(state.todos),
        weeklyActiveToDos: mapActiveTodos(state.todos),
        weekList: weekArray
    }
};


const ToDoChartContainer = connect(
    mapStateToProps
)(ToDoChart);

export default ToDoChartContainer