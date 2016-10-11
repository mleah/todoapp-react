import React from 'react'
import { connect } from 'react-redux'
import { sortTodos, currentSort, SortTypes } from '../actions/actions.js'

class SortTodoForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let sortOption;
        const handleChange = event => {
            event.preventDefault();
            this.props.dispatch(currentSort(sortOption.value));
            this.props.dispatch(sortTodos(sortOption.value));
        };

        return (
            <form onChange={handleChange}>
                <select defaultValue={SortTypes.NO_SORT} ref={node => {
                    sortOption = node
                }}>
                    <option value={SortTypes.NO_SORT}>None</option>
                    <option value={SortTypes.DUE_DATE_ASC} >Due Date Asc</option>
                    <option value={SortTypes.DUE_DATE_DESC} >Due Date Desc</option>
                </select>
            </form>
        )
    }
}

SortTodoForm = connect()(SortTodoForm);

export default SortTodoForm