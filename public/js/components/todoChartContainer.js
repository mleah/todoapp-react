import { connect } from 'react-redux'
import ToDoChart from './todoChart.js'
import { getWeeklyCompletedTodos, getWeeklyActiveTodos } from '../reducers/index.js'

const mapStateToProps = (state) => {
    return {
        weeklyCompletedToDos:  getWeeklyCompletedTodos(state),
        weeklyActiveToDos: getWeeklyActiveTodos(state),
        dateRange: state.currentWeekDates
    }
};

const ToDoChartContainer = connect(
    mapStateToProps
)(ToDoChart);

export default ToDoChartContainer
