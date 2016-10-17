import { connect } from 'react-redux'
import ToDoChart from './todoChart.js'

const mapStateToProps = (state) => {
    return {
        list:  state.todos
    }
};


const ToDoChartContainer = connect(
    mapStateToProps
)(ToDoChart);

export default ToDoChartContainer