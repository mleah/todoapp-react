import { connect } from 'react-redux'
import ToDoChart from './todoChart.js'


//ToDo Extract and name each filter function

const mapCompletedTodos = (currentWeekArray, todos) => {
    return currentWeekArray.map( day =>
        todos.filter( todo =>
            (todo.completedOn === day )).length)
};


//ToDo refactor the boolean logic in mapActiveTodos

const mapActiveTodos = (currentWeekArray, todos) => {
    return currentWeekArray.map( day =>
        todos.filter( todo =>
            (
                (isActive(todo) && onOrAfterCreationDate(todo.dateAdded, day)) ||
                (!isActive(todo) && beforeCompletionDate(todo.completedOn, day) && onOrAfterCreationDate(todo.dateAdded, day))
            )
        ).length)
};


const isActive = (todo) => todo.completedOn === null;


const beforeCompletionDate = (dateCompleted, currentDayOfWeek) => {
    let todoDateCompleted = new Date(dateCompleted);
    let currentDate = new Date(currentDayOfWeek);
    return currentDate < todoDateCompleted;
};


const onOrAfterCreationDate = (dateAdded, currentDayOfWeek) => {
    let todoDateAdded = new Date(dateAdded);
    let currentDate = new Date(currentDayOfWeek);
    return currentDate >= todoDateAdded;
};


const mapStateToProps = (state) => {
    return {
        weeklyCompletedToDos:  mapCompletedTodos(state.currentWeekDates, state.todoList.items),
        weeklyActiveToDos: mapActiveTodos(state.currentWeekDates, state.todoList.items),
        dateRange: state.currentWeekDates
    }
};


const ToDoChartContainer = connect(
    mapStateToProps
)(ToDoChart);

export default ToDoChartContainer
