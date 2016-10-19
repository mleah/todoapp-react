import React, { PropTypes } from 'react'
import ChartistGraph from 'react-chartist'


class ToDoChart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const lineChartData = {
            labels: this.props.dateRange,
            series: [this.props.weeklyActiveToDos,
                this.props.weeklyCompletedToDos
            ]
        };
        const lineChartOptions = {
            low: 0,
            showArea: true
        };

        return <ChartistGraph data={lineChartData} options={lineChartOptions} type={'Line'} />;
    }
}

ToDoChart.propTypes = {
    dateRange: PropTypes.array.isRequired,
    weeklyActiveToDos: PropTypes.array.isRequired,
    weeklyCompletedToDos: PropTypes.array.isRequired
};

export default ToDoChart






