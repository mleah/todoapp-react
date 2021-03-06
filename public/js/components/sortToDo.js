import React from 'react'
import { connect } from 'react-redux'
import SelectFormComponent from './selectFormComponent.js'
import { currentSort, SortTypes } from '../actions/sortActions.js'


//ToDo investigate adding these props a different way since none come from state
const mapStateToProps = () => {
    return {
        defaultOption: SortTypes.DATE_ADDED,
        optionOne: SortTypes.DUE_DATE_ASC,
        optionTwo: SortTypes.DUE_DATE_DESC,
        defaultText: 'Date Added',
        optionOneText: 'Due Date Ascending',
        optionTwoText: 'Due Date Descending',
        title: 'Sort by:'
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        firstOnChangeDispatch:  (newSort) => {
            dispatch(currentSort(newSort))
        }
    }
};

const SortTodoForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectFormComponent);

export default SortTodoForm