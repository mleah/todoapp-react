import React from 'react'
import { connect } from 'react-redux'
import { sortTodos } from '../actions/actions.js'

class SortTodoForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let sortOption;
        const handleChange = event => {
            event.preventDefault();
            this.props.dispatch(sortTodos(sortOption.value));
        };

        return (
            <form onChange={handleChange}>
                <select defaultValue="None" ref={node => {
                    sortOption = node
                }}>
                    <option value="None">None</option>
                    <option value="due_date_asc" >Due Date Asc</option>
                    <option value="due_date_desc" >Due Date Desc</option>
                </select>
            </form>
        )
    }
}

SortTodoForm = connect()(SortTodoForm);

export default SortTodoForm