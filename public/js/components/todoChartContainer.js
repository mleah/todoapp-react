import { connect } from 'react-redux'
import ToDoChart from './todoChart.js'
import moment from 'moment'

const currentWeekLabels = [moment().startOf('week').format('YYYY-MM-DD'), moment().startOf('isoweek').format('YYYY-MM-DD'), moment().startOf('week').add(2, 'days').format('YYYY-MM-DD'),
                    moment().startOf('week').add(3, 'days').format('YYYY-MM-DD'), moment().startOf('week').add(4, 'days').format('YYYY-MM-DD'),
                    moment().startOf('week').add(5, 'days').format('YYYY-MM-DD'), moment().endOf('week').format('YYYY-MM-DD')];


//ToDo Extract and name each filter function

const mapCompletedTodos = (todos) => {
    return currentWeekLabels.map( day =>
        todos.filter( todo =>
            todo.completedOn === day ).length)
};

const mapActiveTodos = (todos) => {
    return currentWeekLabels.map( day =>
        todos.filter( todo =>
            ( isActive(todo) || isCompletedInFuture(todo.completedOn, day) )).length)
};


const isActive = (todo) => todo.completedOn === null;

const isCompletedInFuture = (dateCompleted, dayOfWeek) => {
    let todoDateCompleted = new Date(dateCompleted);
    let currentDate = new Date(dayOfWeek);
    return currentDate < todoDateCompleted;
};



const mapStateToProps = (state) => {
    return {
        weeklyCompletedToDos:  mapCompletedTodos(state.todoList.items),
        weeklyActiveToDos: mapActiveTodos(state.todoList.items),
        dateRange: currentWeekLabels
    }
};


const ToDoChartContainer = connect(
    mapStateToProps
)(ToDoChart);

export default ToDoChartContainer
