import React from 'react'
import { connect } from 'react-redux'
import SelectFormComponent from './selectFormComponent.js'
import { setVisibilityFilter, FilterTypes } from '../actions/filterActions.js'


const mapStateToProps = () => {
    return {
        defaultOption: FilterTypes.SHOW_ALL,
        optionOne: FilterTypes.SHOW_COMPLETED,
        optionTwo: FilterTypes.SHOW_ACTIVE,
        defaultText: 'All',
        optionOneText: 'Completed',
        optionTwoText: 'Active'
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        firstOnChangeDispatch: (filterType) => {
            dispatch(setVisibilityFilter(filterType))
        }
    }
};

const FilterTodoForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectFormComponent);

export default FilterTodoForm