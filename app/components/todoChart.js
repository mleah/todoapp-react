import React, { PropTypes } from 'react'
var ChartistGraph = require('react-chartist')


class ToDoChart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const lineChartData = {
            labels: this.props.weekList,
            series: [this.props.weeklyActiveToDos,
                this.props.weeklyCompletedToDos
            ]
        }
        const lineChartOptions = {
            low: 0,
            showArea: true
        }

        return <ChartistGraph data={lineChartData} options={lineChartOptions} type={'Line'} />;
    }
}

// ToDoChart.propTypes = {
//     list: PropTypes.array.isRequired
// };

export default ToDoChart






