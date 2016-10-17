import React, { PropTypes } from 'react'
var ChartistGraph = require('react-chartist')

const lineChartData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [[3, 4, 5, 2, 1, 1, 7, 2],
        [5, 9, 7, 8, 5, 3, 5, 4]
    ]
}
const lineChartOptions = {
    low: 0,
    showArea: true
}

class ToDoChart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ChartistGraph data={lineChartData} options={lineChartOptions} type={'Line'} />
        );
    }
}

ToDoChart.propTypes = {
    list: PropTypes.array.isRequired
};

export default ToDoChart






