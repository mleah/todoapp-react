import React, { PropTypes } from 'react'
import { Line } from 'react-chartjs-2';


class ToDoChart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let data = {
            labels: this.props.dateRange,
            datasets: [
                {
                    type: 'line',
                    fill: false,
                    lineTension: 0,
                    backgroundColor: '#0067a0',
                    borderColor: '#0067a0',
                    borderWidth: 1,
                    data: this.props.weeklyActiveToDos,
                },
                {
                    type: 'line',
                    fill: false,
                    lineTension: 0,
                    backgroundColor: '#ff0000',
                    borderColor: '#ff0000',
                    borderWidth: 1,
                    data: this.props.weeklyCompletedToDos,

                }
            ]
        };

        let options = {
            maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom'
            }
        };

        return (
            <div className="chart-container">
                <Line
                    data={data}
                    options={options}
                    height={200}
                    width={150}
                />
            </div>
        )
    }
}

ToDoChart.propTypes = {
    dateRange: PropTypes.array.isRequired,
    weeklyActiveToDos: PropTypes.array.isRequired,
    weeklyCompletedToDos: PropTypes.array.isRequired
};

export default ToDoChart






