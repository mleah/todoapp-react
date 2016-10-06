import React from 'react'
import { connect } from 'react-redux'


class List extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <ul>
                {this.props.list.map(function(todo, index) {
                    return <li key={index}>{todo.text}</li>
                })}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.todos
    }
}

export default connect(mapStateToProps)(List)